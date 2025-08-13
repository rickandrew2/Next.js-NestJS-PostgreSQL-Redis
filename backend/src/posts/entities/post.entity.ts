import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ unique: true, length: 255 })
  slug: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', nullable: true })
  excerpt: string;

  @Column({ nullable: true, length: 500 })
  featured_image: string;

  @Column({ default: 'draft', length: 20 })
  status: 'draft' | 'published';

  @Column({ nullable: true })
  published_at: Date;

  @Column({ nullable: true, length: 255 })
  meta_title: string;

  @Column({ type: 'text', nullable: true })
  meta_description: string;

  @Column({ default: 0 })
  view_count: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // Foreign Keys
  @Column()
  author_id: number;

  @Column({ nullable: true })
  category_id: number;
}