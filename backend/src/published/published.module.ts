import { Module } from '@nestjs/common';
import { PublishedController } from './published.controller';
import { PublishedService } from './published.service';

@Module({
  controllers: [PublishedController],
  providers: [PublishedService],
  exports: [PublishedService], // Export so other modules can use it
})
export class PublishedModule {}
