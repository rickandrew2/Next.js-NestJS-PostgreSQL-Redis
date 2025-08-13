import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  // Get all published posts with caching. If forceRefresh is true, bypass cache.
  async findAll(forceRefresh = false): Promise<Post[]> {
    if (!forceRefresh) {
      const cached = await this.cacheManager.get<Post[]>('all_posts');
      if (cached) {
        // Validate cache size matches DB count in case data was inserted externally
        try {
          const count = await this.postsRepository.count({ where: { status: 'published' } });
          if (cached.length === count) {
            console.log('📦 Returning cached posts');
            return cached;
          }
          console.log(`⚠️ Cache stale (cached=${cached.length}, db=${count}). Refreshing...`);
        } catch (e) {
          console.warn('⚠️ Cache validation failed, refreshing list');
        }
      }
    }

    const posts = await this.postsRepository.find({
      where: { status: 'published' },
      order: { published_at: 'DESC' }
    });

    await this.cacheManager.set('all_posts', posts, 3600000); // 1 hour
    console.log('💾 Stored posts in cache');
    return posts;
  }

  async clearAllPostsCache(): Promise<void> {
    await this.cacheManager.del('all_posts');
  }

  // Get a single post by ID with caching
  async findOne(id: number): Promise<Post | null> {
    const cached = await this.cacheManager.get<Post>(`post_${id}`);
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

  // Get post by slug (for SEO-friendly URLs)
  async findBySlug(slug: string): Promise<Post | null> {
    const cached = await this.cacheManager.get<Post>(`post_slug_${slug}`);
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

  // Get posts by category
  async findByCategory(categoryId: number): Promise<Post[]> {
    const posts = await this.postsRepository.find({
      where: { category_id: categoryId, status: 'published' },
      order: { published_at: 'DESC' }
    });

    return posts;
  }

  // Create a new post (admin only)
  async create(postData: Partial<Post>): Promise<Post> {
    const post = this.postsRepository.create(postData);
    const saved = await this.postsRepository.save(post);

    // Clear cache
    await this.cacheManager.del('all_posts');
    console.log('🗑️ Cleared posts cache after creating new post');

    return saved;
  }

  // Update a post (admin only)
  async update(id: number, postData: Partial<Post>): Promise<Post | null> {
    await this.postsRepository.update(id, postData);
    const updated = await this.findOne(id);

    // Clear cache
    await this.cacheManager.del('all_posts');
    await this.cacheManager.del(`post_${id}`);
    console.log('🗑️ Cleared cache after updating post');

    return updated;
  }

  // Delete a post (admin only)
  async remove(id: number): Promise<boolean> {
    const result = await this.postsRepository.delete(id);
    
    // Clear cache
    await this.cacheManager.del('all_posts');
    await this.cacheManager.del(`post_${id}`);
    console.log('🗑️ Cleared cache after deleting post');

    return result.affected > 0;
  }

  // Increment view count
  async incrementViewCount(id: number): Promise<void> {
    await this.postsRepository.increment({ id }, 'view_count', 1);
  }
}
