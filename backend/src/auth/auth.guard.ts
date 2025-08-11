import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Check if endpoint is marked as public
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    // If public, allow access without authentication
    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers.authorization;

    // Simple check - in real apps, you'd validate JWT tokens
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('No valid authorization token provided');
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    // Simple validation - in real apps, verify JWT
    if (token !== 'valid-token-123') {
      throw new UnauthorizedException('Invalid token');
    }

    // Add user info to request (like in MERN)
    request['user'] = { id: 1, email: 'user@example.com' };
    
    return true; // Allow the request to proceed
  }
}
