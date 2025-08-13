import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';
import { AuthGuard } from '../auth/auth.guard';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // Public endpoints (no auth required)
  @Get()
  async findAll(@Query('refresh') refresh?: string): Promise<PostEntity[]> {
    const force = refresh === '1' || refresh === 'true';
    return this.postsService.findAll(force);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostEntity | null> {
    const post = await this.postsService.findOne(+id);
    if (post) {
      // Increment view count
      await this.postsService.incrementViewCount(+id);
    }
    return post;
  }

  @Get('slug/:slug')
  async findBySlug(@Param('slug') slug: string): Promise<PostEntity | null> {
    const post = await this.postsService.findBySlug(slug);
    if (post) {
      // Increment view count
      await this.postsService.incrementViewCount(post.id);
    }
    return post;
  }

  @Get('category/:categoryId')
  async findByCategory(@Param('categoryId') categoryId: string): Promise<PostEntity[]> {
    return this.postsService.findByCategory(+categoryId);
  }

  // Admin endpoints (auth required)
  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() postData: Partial<PostEntity>): Promise<PostEntity> {
    return this.postsService.create(postData);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() postData: Partial<PostEntity>,
  ): Promise<PostEntity | null> {
    return this.postsService.update(+id, postData);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ success: boolean }> {
    const success = await this.postsService.remove(+id);
    return { success };
  }
}
