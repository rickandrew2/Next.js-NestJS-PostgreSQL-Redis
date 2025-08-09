import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: { email: string; password: string; name: string }) {
    const user = await this.usersService.create(createUserDto);
    // Don't return password
    const { password, ...result } = user;
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findById(+id);
    if (!user) {
      return { message: 'User not found' };
    }
    // Don't return password
    const { password, ...result } = user;
    return result;
  }

  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    // Don't return passwords
    return users.map(user => {
      const { password, ...result } = user;
      return result;
    });
  }
}
