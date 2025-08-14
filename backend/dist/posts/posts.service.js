"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
const post_entity_1 = require("./entities/post.entity");
let PostsService = class PostsService {
    constructor(postsRepository, cacheManager) {
        this.postsRepository = postsRepository;
        this.cacheManager = cacheManager;
    }
    async findAll(forceRefresh = false) {
        if (!forceRefresh) {
            const cached = await this.cacheManager.get('all_posts');
            if (cached) {
                try {
                    const count = await this.postsRepository.count({ where: { status: 'published' } });
                    if (cached.length === count) {
                        console.log('📦 Returning cached posts');
                        return cached;
                    }
                    console.log(`⚠️ Cache stale (cached=${cached.length}, db=${count}). Refreshing...`);
                }
                catch (e) {
                    console.warn('⚠️ Cache validation failed, refreshing list');
                }
            }
        }
        const posts = await this.postsRepository.find({
            where: { status: 'published' },
            order: { published_at: 'DESC' }
        });
        await this.cacheManager.set('all_posts', posts, 3600000);
        console.log('💾 Stored posts in cache');
        return posts;
    }
    async clearAllPostsCache() {
        await this.cacheManager.del('all_posts');
    }
    async findOne(id) {
        const cached = await this.cacheManager.get(`post_${id}`);
        if (cached) {
            console.log(`📦 Returning cached post ${id}`);
            return cached;
        }
        const post = await this.postsRepository.findOne({
            where: { id, status: 'published' }
        });
        if (post) {
            await this.cacheManager.set(`post_${id}`, post, 3600000);
            console.log(`💾 Stored post ${id} in cache`);
        }
        return post;
    }
    async findBySlug(slug) {
        const cached = await this.cacheManager.get(`post_slug_${slug}`);
        if (cached) {
            console.log(`📦 Returning cached post by slug: ${slug}`);
            return cached;
        }
        const post = await this.postsRepository.findOne({
            where: { slug, status: 'published' }
        });
        if (post) {
            await this.cacheManager.set(`post_slug_${slug}`, post, 3600000);
            console.log(`💾 Stored post by slug in cache: ${slug}`);
        }
        return post;
    }
    async findByCategory(categoryId) {
        const posts = await this.postsRepository.find({
            where: { category_id: categoryId, status: 'published' },
            order: { published_at: 'DESC' }
        });
        return posts;
    }
    async create(postData) {
        const post = this.postsRepository.create(postData);
        const saved = await this.postsRepository.save(post);
        await this.cacheManager.del('all_posts');
        console.log('🗑️ Cleared posts cache after creating new post');
        return saved;
    }
    async update(id, postData) {
        await this.postsRepository.update(id, postData);
        const updated = await this.findOne(id);
        await this.cacheManager.del('all_posts');
        await this.cacheManager.del(`post_${id}`);
        console.log('🗑️ Cleared cache after updating post');
        return updated;
    }
    async remove(id) {
        const result = await this.postsRepository.delete(id);
        await this.cacheManager.del('all_posts');
        await this.cacheManager.del(`post_${id}`);
        console.log('🗑️ Cleared cache after deleting post');
        return result.affected > 0;
    }
    async incrementViewCount(id) {
        await this.postsRepository.increment({ id }, 'view_count', 1);
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(post_entity_1.Post)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], PostsService);
//# sourceMappingURL=posts.service.js.map