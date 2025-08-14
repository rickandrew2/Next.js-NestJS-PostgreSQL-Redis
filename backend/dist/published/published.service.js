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
exports.PublishedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cache_manager_1 = require("@nestjs/cache-manager");
const published_entity_1 = require("./entities/published.entity");
let PublishedService = class PublishedService {
    constructor(publishedRepository, cacheManager) {
        this.publishedRepository = publishedRepository;
        this.cacheManager = cacheManager;
    }
    async findAll() {
        const cached = await this.cacheManager.get('all_published');
        if (cached) {
            console.log('📦 Returning cached data');
            return cached;
        }
        const published = await this.publishedRepository.find({
            order: { createdAt: 'DESC' }
        });
        await this.cacheManager.set('all_published', published, 3600000);
        console.log('💾 Stored in cache');
        return published;
    }
    async findOne(id) {
        const cached = await this.cacheManager.get(`published_${id}`);
        if (cached) {
            console.log(`📦 Returning cached data for ID ${id}`);
            return cached;
        }
        const published = await this.publishedRepository.findOne({ where: { id } });
        if (published) {
            await this.cacheManager.set(`published_${id}`, published, 3600000);
            console.log(`💾 Stored in cache for ID ${id}`);
        }
        return published;
    }
    async create(createPublishedDto) {
        const newPublished = this.publishedRepository.create(createPublishedDto);
        const saved = await this.publishedRepository.save(newPublished);
        await this.cacheManager.del('all_published');
        console.log('🗑️ Cleared cache after creating new item');
        return saved;
    }
    async update(id, updatePublishedDto) {
        const published = await this.publishedRepository.findOne({ where: { id } });
        if (!published) {
            return null;
        }
        Object.assign(published, updatePublishedDto);
        const updated = await this.publishedRepository.save(published);
        await this.cacheManager.del('all_published');
        await this.cacheManager.del(`published_${id}`);
        console.log('🗑️ Cleared cache after updating item');
        return updated;
    }
    async remove(id) {
        const published = await this.publishedRepository.findOne({ where: { id } });
        if (!published) {
            return false;
        }
        await this.publishedRepository.remove(published);
        await this.cacheManager.del('all_published');
        await this.cacheManager.del(`published_${id}`);
        console.log('🗑️ Cleared cache after deleting item');
        return true;
    }
};
exports.PublishedService = PublishedService;
exports.PublishedService = PublishedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(published_entity_1.PublishedEntity)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [typeorm_2.Repository, Object])
], PublishedService);
//# sourceMappingURL=published.service.js.map