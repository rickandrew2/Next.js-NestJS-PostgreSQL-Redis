import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find({
      order: { name: 'ASC' }
    });
  }

  async findOne(id: number): Promise<Category | null> {
    return this.categoriesRepository.findOne({ where: { id } });
  }

  async findBySlug(slug: string): Promise<Category | null> {
    return this.categoriesRepository.findOne({ where: { slug } });
  }

  async create(categoryData: Partial<Category>): Promise<Category> {
    const category = this.categoriesRepository.create(categoryData);
    return this.categoriesRepository.save(category);
  }

  async update(id: number, categoryData: Partial<Category>): Promise<Category | null> {
    await this.categoriesRepository.update(id, categoryData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.categoriesRepository.delete(id);
    return result.affected > 0;
  }
}
