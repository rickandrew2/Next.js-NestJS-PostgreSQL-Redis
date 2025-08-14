export declare class Post {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featured_image: string;
    status: 'draft' | 'published';
    published_at: Date;
    meta_title: string;
    meta_description: string;
    view_count: number;
    created_at: Date;
    updated_at: Date;
    author_id: number;
    category_id: number;
}
