import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(refresh?: string): Promise<PostEntity[]>;
    findOne(id: string): Promise<PostEntity | null>;
    findBySlug(slug: string): Promise<PostEntity | null>;
    findByCategory(categoryId: string): Promise<PostEntity[]>;
    create(postData: Partial<PostEntity>): Promise<PostEntity>;
    update(id: string, postData: Partial<PostEntity>): Promise<PostEntity | null>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
