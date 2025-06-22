import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';
import { ResponseUtil } from 'src/utils/response-util';
import { DeleteResponse } from 'src/types';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id') id: string): Promise<User> {
    return this.userService.findUserOrFail(+id);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.createUser(body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<DeleteResponse> {
    await this.userService.deleteUser({ id: +id });
    return ResponseUtil.successDelete(id, 'User');
  }
}
