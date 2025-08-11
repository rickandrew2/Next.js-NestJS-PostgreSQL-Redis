import { Injectable } from '@nestjs/common';

// Define the Published interface (like a TypeScript type)
export interface PublishedEntity {
  id: number;
  title: string;
  body: string;
  userId: number;
  createdAt: string;
}

@Injectable()
export class PublishedService {
  // Mock data - in a real app, this would come from a database
  private published: PublishedEntity[] = [
    {
      id: 1,
      title: 'Welcome to Our NestJS Backend! 🚀',
      body: 'This is our first published item from the NestJS backend. We\'ve successfully replaced the external API with our own backend service. This demonstrates how NestJS provides a clean, modular architecture for building APIs.',
      userId: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: 'Next.js + NestJS = Perfect Stack! 💪',
      body: 'Combining Next.js for the frontend with NestJS for the backend gives us the best of both worlds: server-side rendering, type safety, and a scalable architecture.',
      userId: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      title: 'From MERN to Next.js + NestJS 📚',
      body: 'Transitioning from MERN stack to Next.js + NestJS opens up new possibilities with better TypeScript support, improved performance, and more structured code organization.',
      userId: 1,
      createdAt: new Date().toISOString(),
    },
  ];

  // Get all published items
  findAll(): PublishedEntity[] {
    return this.published;
  }

  // Get a single published item by ID
  findOne(id: number): PublishedEntity | undefined {
    return this.published.find(item => item.id === id);
  }

  // Create a new published item
  create(createPublishedDto: Omit<PublishedEntity, 'id' | 'createdAt'>): PublishedEntity {
    const newPublished: PublishedEntity = {
      ...createPublishedDto,
      id: this.published.length + 1,
      createdAt: new Date().toISOString(),
    };
    this.published.push(newPublished);
    return newPublished;
  }

  // Update a published item
  update(id: number, updatePublishedDto: Partial<PublishedEntity>): PublishedEntity | undefined {
    const index = this.published.findIndex(item => item.id === id);
    if (index === -1) return undefined;
    
    this.published[index] = { ...this.published[index], ...updatePublishedDto };
    return this.published[index];
  }

  // Delete a published item
  remove(id: number): boolean {
    const index = this.published.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    this.published.splice(index, 1);
    return true;
  }
}
