import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublishedModule } from './published/published.module';

@Module({
  imports: [PublishedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
