import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(_refresh?: string): Promise<Category[]>;
    findOne(id: string): Promise<Category | null>;
    findBySlug(slug: string): Promise<Category | null>;
    create(categoryData: Partial<Category>): Promise<Category>;
    update(id: string, categoryData: Partial<Category>): Promise<Category | null>;
    remove(id: string): Promise<{
        success: boolean;
    }>;
}
