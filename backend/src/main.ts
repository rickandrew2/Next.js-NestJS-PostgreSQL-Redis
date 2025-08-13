import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for our Next.js frontend
  app.enableCors({
    origin: 'http://localhost:3000', // Your Next.js frontend URL
    credentials: true,
  });

  // Enable global validation
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove properties that don't have decorators
    forbidNonWhitelisted: true, // Throw error if non-whitelisted properties are present
    transform: true, // Transform payloads to be objects typed according to their DTO classes
  }));
  
  const port = process.env.PORT || 3001;
  await app.listen(port);
  console.log(`🚀 NestJS Backend running on http://localhost:${port}`);
  console.log(`🗄️ Database: PostgreSQL on ${process.env.DB_HOST}:${process.env.DB_PORT}`);
  console.log(`⚡ Cache: Redis on ${process.env.UPSTASH_REDIS_URL}`);
}

bootstrap();
