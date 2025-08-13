import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Public endpoints (no auth required)
  @Get()
  async findAll(@Query('refresh') _refresh?: string): Promise<Category[]> {
    // No category caching today, but preserving a refresh param for consistency
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category | null> {
    return this.categoriesService.findOne(+id);
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string): Promise<Category | null> {
    return this.categoriesService.findBySlug(slug);
  }

  // Admin endpoints (auth required)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() categoryData: Partial<Category>): Promise<Category> {
    return this.categoriesService.create(categoryData);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() categoryData: Partial<Category>,
  ): Promise<Category | null> {
    return this.categoriesService.update(+id, categoryData);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ success: boolean }> {
    const success = await this.categoriesService.remove(+id);
    return { success };
  }
}
