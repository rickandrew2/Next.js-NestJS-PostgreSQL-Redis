import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Param, 
  Body, 
  HttpException, 
  HttpStatus,
  UseGuards,
  SetMetadata
} from '@nestjs/common';
import { PublishedService } from './published.service';
import { PublishedEntity } from './entities/published.entity';
import { CreatePublishedDto } from './dto/create-published.dto';
import { UpdatePublishedDto } from './dto/update-published.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

// Custom decorator to mark public endpoints
const Public = () => SetMetadata('isPublic', true);

@Controller('published')
@UseGuards(AuthGuard) // ← Protect all endpoints in this controller
export class PublishedController {
  constructor(private readonly publishedService: PublishedService) {}

  // GET /published - Get all published items (PUBLIC - no auth required)
  @Get()
  @Public() // ← This makes it public
  async findAll(): Promise<PublishedEntity[]> {
    return this.publishedService.findAll();
  }

  // GET /published/:id - Get a single published item (PUBLIC - no auth required)
  @Get(':id')
  @Public() // ← This makes it public
  async findOne(@Param('id') id: string): Promise<PublishedEntity> {
    const published = await this.publishedService.findOne(+id);
    if (!published) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return published;
  }

  // POST /published - Create a new published item (PROTECTED - auth required)
  @Post()
  async create(
    @Body() createPublishedDto: CreatePublishedDto,
    @CurrentUser() user: any // ← Get current user (like req.user in MERN)
  ): Promise<PublishedEntity> {
    console.log('Creating published item for user:', user);
    return this.publishedService.create(createPublishedDto);
  }

  // PUT /published/:id - Update a published item (PROTECTED - auth required)
  @Put(':id')
  async update(
    @Param('id') id: string, 
    @Body() updatePublishedDto: UpdatePublishedDto,
    @CurrentUser() user: any
  ): Promise<PublishedEntity> {
    console.log('Updating published item for user:', user);
    const published = await this.publishedService.update(+id, updatePublishedDto);
    if (!published) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return published;
  }

  // DELETE /published/:id - Delete a published item (PROTECTED - auth required)
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @CurrentUser() user: any
  ): Promise<{ message: string }> {
    console.log('Deleting published item for user:', user);
    const deleted = await this.publishedService.remove(+id);
    if (!deleted) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Published item deleted successfully' };
  }
}
