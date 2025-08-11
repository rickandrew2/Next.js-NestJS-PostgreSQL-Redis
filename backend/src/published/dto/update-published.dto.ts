import { IsString, IsOptional, IsNumber, MinLength, MaxLength } from 'class-validator';

export class UpdatePublishedDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  @MaxLength(100, { message: 'Title cannot exceed 100 characters' })
  title?: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'Body must be at least 10 characters long' })
  @MaxLength(1000, { message: 'Body cannot exceed 1000 characters' })
  body?: string;

  @IsOptional()
  @IsNumber()
  userId?: number;
}
