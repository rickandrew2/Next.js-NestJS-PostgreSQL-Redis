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
import type { PublishedEntity } from './published.service';
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
  findAll(): PublishedEntity[] {
    return this.publishedService.findAll();
  }

  // GET /published/:id - Get a single published item (PUBLIC - no auth required)
  @Get(':id')
  @Public() // ← This makes it public
  findOne(@Param('id') id: string): PublishedEntity {
    const published = this.publishedService.findOne(+id);
    if (!published) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return published;
  }

  // POST /published - Create a new published item (PROTECTED - auth required)
  @Post()
  create(
    @Body() createPublishedDto: CreatePublishedDto,
    @CurrentUser() user: any // ← Get current user (like req.user in MERN)
  ): PublishedEntity {
    console.log('Creating published item for user:', user);
    return this.publishedService.create(createPublishedDto);
  }

  // PUT /published/:id - Update a published item (PROTECTED - auth required)
  @Put(':id')
  update(
    @Param('id') id: string, 
    @Body() updatePublishedDto: UpdatePublishedDto,
    @CurrentUser() user: any
  ): PublishedEntity {
    console.log('Updating published item for user:', user);
    const published = this.publishedService.update(+id, updatePublishedDto);
    if (!published) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return published;
  }

  // DELETE /published/:id - Delete a published item (PROTECTED - auth required)
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @CurrentUser() user: any
  ): { message: string } {
    console.log('Deleting published item for user:', user);
    const deleted = this.publishedService.remove(+id);
    if (!deleted) {
      throw new HttpException('Published item not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'Published item deleted successfully' };
  }
}
