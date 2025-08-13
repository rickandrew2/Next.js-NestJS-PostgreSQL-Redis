import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CacheModuleOptions } from '@nestjs/cache-manager';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'postgres',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false, // Temporarily disable to prevent schema conflicts
  logging: process.env.NODE_ENV !== 'production',
  ssl: {
    rejectUnauthorized: false
  },
  extra: {
    ssl: {
      rejectUnauthorized: false
    }
  }
};

// Upstash Redis configuration is now handled in AppModule via redisStore and URL
