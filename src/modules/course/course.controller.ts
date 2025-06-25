import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from '@prisma/client';
import { CreateCourseDto } from './dto/create-course.dto';
import { ResponseUtil } from 'src/utils/response-util';
import { DeleteResponse } from 'src/types';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  async findAllCourses(): Promise<Course[]> {
    return await this.courseService.findAllCourses();
  }

  @Get(':id')
  async findACourse(@Param('id', ParseIntPipe) id: number): Promise<Course> {
    return this.courseService.findCourseOrFail(id);
  }

  @Post()
  async createCourse(@Body() body: CreateCourseDto): Promise<Course> {
    return await this.courseService.createCourse(body);
  }

  @Delete(':id')
  async deleteCourse(@Param('id') id: number): Promise<DeleteResponse> {
    await this.courseService.deleteCourse(id);
    return ResponseUtil.successDelete(id, 'User');
  }
}
