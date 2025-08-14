import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { Post } from './entities/post.entity';
export declare class PostsService {
    private postsRepository;
    private cacheManager;
    constructor(postsRepository: Repository<Post>, cacheManager: Cache);
    findAll(forceRefresh?: boolean): Promise<Post[]>;
    clearAllPostsCache(): Promise<void>;
    findOne(id: number): Promise<Post | null>;
    findBySlug(slug: string): Promise<Post | null>;
    findByCategory(categoryId: number): Promise<Post[]>;
    create(postData: Partial<Post>): Promise<Post>;
    update(id: number, postData: Partial<Post>): Promise<Post | null>;
    remove(id: number): Promise<boolean>;
    incrementViewCount(id: number): Promise<void>;
}
