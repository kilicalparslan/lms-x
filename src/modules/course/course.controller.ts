import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course } from '@prisma/client';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get()
  findAllCourses(): Promise<Course[]> {
    return this.courseService.findAllCourses();
  }

  @Get(':id')
  findACourse(@Param('id') id: string): Promise<Course | null> {
    return this.courseService.findCourse(+id);
  }

  @Post()
  createCourse(@Body() body: CreateCourseDto): Promise<Course> {
    return this.courseService.createCourse(body);
  }

  @Delete(':id')
  deleteCourse(@Param('id') id: string): Promise<Course> {
    return this.courseService.deleteCourse(+id);
  }
}
