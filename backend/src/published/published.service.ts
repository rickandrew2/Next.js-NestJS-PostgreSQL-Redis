import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { PublishedEntity } from './entities/published.entity';
import { CreatePublishedDto } from './dto/create-published.dto';
import { UpdatePublishedDto } from './dto/update-published.dto';

@Injectable()
export class PublishedService {
  constructor(
    @InjectRepository(PublishedEntity)
    private publishedRepository: Repository<PublishedEntity>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) {}

  // Get all published items with caching
  async findAll(): Promise<PublishedEntity[]> {
    // Try to get from cache first
    const cached = await this.cacheManager.get<PublishedEntity[]>('all_published');
    if (cached) {
      console.log('📦 Returning cached data');
      return cached;
    }

    // If not in cache, get from database
    const published = await this.publishedRepository.find({
      order: { createdAt: 'DESC' }
    });

    // Store in cache for 1 hour
    await this.cacheManager.set('all_published', published, 3600000);
    console.log('💾 Stored in cache');

    return published;
  }

  // Get a single published item by ID with caching
  async findOne(id: number): Promise<PublishedEntity | null> {
    // Try to get from cache first
    const cached = await this.cacheManager.get<PublishedEntity>(`published_${id}`);
    if (cached) {
      console.log(`📦 Returning cached data for ID ${id}`);
      return cached;
    }

    // If not in cache, get from database
    const published = await this.publishedRepository.findOne({ where: { id } });

    if (published) {
      // Store in cache for 1 hour
      await this.cacheManager.set(`published_${id}`, published, 3600000);
      console.log(`💾 Stored in cache for ID ${id}`);
    }

    return published;
  }

  // Create a new published item
  async create(createPublishedDto: CreatePublishedDto): Promise<PublishedEntity> {
    const newPublished = this.publishedRepository.create(createPublishedDto);
    const saved = await this.publishedRepository.save(newPublished);

    // Clear cache since we added new data
    await this.cacheManager.del('all_published');
    console.log('🗑️ Cleared cache after creating new item');

    return saved;
  }

  // Update a published item
  async update(id: number, updatePublishedDto: UpdatePublishedDto): Promise<PublishedEntity | null> {
    const published = await this.publishedRepository.findOne({ where: { id } });
    if (!published) {
      return null;
    }

    // Update the entity
    Object.assign(published, updatePublishedDto);
    const updated = await this.publishedRepository.save(published);

    // Clear related caches
    await this.cacheManager.del('all_published');
    await this.cacheManager.del(`published_${id}`);
    console.log('🗑️ Cleared cache after updating item');

    return updated;
  }

  // Delete a published item
  async remove(id: number): Promise<boolean> {
    const published = await this.publishedRepository.findOne({ where: { id } });
    if (!published) {
      return false;
    }

    await this.publishedRepository.remove(published);

    // Clear related caches
    await this.cacheManager.del('all_published');
    await this.cacheManager.del(`published_${id}`);
    console.log('🗑️ Cleared cache after deleting item');

    return true;
  }
}
