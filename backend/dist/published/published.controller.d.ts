import { PublishedService } from './published.service';
import { PublishedEntity } from './entities/published.entity';
import { CreatePublishedDto } from './dto/create-published.dto';
import { UpdatePublishedDto } from './dto/update-published.dto';
export declare class PublishedController {
    private readonly publishedService;
    constructor(publishedService: PublishedService);
    findAll(): Promise<PublishedEntity[]>;
    findOne(id: string): Promise<PublishedEntity>;
    create(createPublishedDto: CreatePublishedDto, user: any): Promise<PublishedEntity>;
    update(id: string, updatePublishedDto: UpdatePublishedDto, user: any): Promise<PublishedEntity>;
    remove(id: string, user: any): Promise<{
        message: string;
    }>;
}
