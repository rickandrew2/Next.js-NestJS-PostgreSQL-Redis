import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';
import { PublishedController } from './published.controller';
import { PublishedService } from './published.service';
import { PublishedEntity } from './entities/published.entity';
import { databaseConfig } from '../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([PublishedEntity]),
    CacheModule.register(),
  ],
  controllers: [PublishedController],
  providers: [PublishedService],
  exports: [PublishedService],
})
export class PublishedModule {}
