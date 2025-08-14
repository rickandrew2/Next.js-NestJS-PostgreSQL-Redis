import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { PublishedEntity } from './entities/published.entity';
import { CreatePublishedDto } from './dto/create-published.dto';
import { UpdatePublishedDto } from './dto/update-published.dto';
export declare class PublishedService {
    private publishedRepository;
    private cacheManager;
    constructor(publishedRepository: Repository<PublishedEntity>, cacheManager: Cache);
    findAll(): Promise<PublishedEntity[]>;
    findOne(id: number): Promise<PublishedEntity | null>;
    create(createPublishedDto: CreatePublishedDto): Promise<PublishedEntity>;
    update(id: number, updatePublishedDto: UpdatePublishedDto): Promise<PublishedEntity | null>;
    remove(id: number): Promise<boolean>;
}
