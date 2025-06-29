import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.course.findMany();
  }

  async findOne(id: number) {
    const course = await this.prisma.user.findUniqueOrThrow({
      where: { id },
    });
    return course;
  }

  async create(data: CreateCourseDto) {
    return this.prisma.course.create({
      data,
    });
  }

  async update(id: number, data: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.course.delete({
      where: { id },
    });
    return { deleted: true };
  }
}
