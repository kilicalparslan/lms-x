import { Injectable, NotFoundException } from '@nestjs/common';
import { Course } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async findAllCourses(): Promise<Course[]> {
    return this.prisma.course.findMany();
  }

  async findCourse(id: number): Promise<Course | null> {
    return this.prisma.course.findUnique({
      where: { id },
    });
  }

  async findCourseOrFail(id: number): Promise<Course> {
    const course = await this.findCourse(id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async createCourse(data: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({
      data,
    });
  }

  async deleteCourse(id: number): Promise<Course> {
    return this.prisma.course.delete({
      where: { id },
    });
  }
}
