import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishedModule } from './published/published.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { databaseConfig } from './config/database.config';

// Import our new entities
import { User } from './users/entities/user.entity';
import { Category } from './categories/entities/category.entity';
import { Post } from './posts/entities/post.entity';
import { Tag } from './tags/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      entities: [User, Category, Post, Tag], // Add our new entities
    }),
    CacheModule.registerAsync({
      useFactory: async () => ({
        store: await redisStore({
          url: process.env.UPSTASH_REDIS_URL,
          ttl: 60 * 60 * 24,
        }) as unknown as any,
      }),
    }),
    PublishedModule,
    CategoriesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
