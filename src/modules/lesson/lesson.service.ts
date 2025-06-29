import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.lesson.findMany();
  }

  async findOne(id: number) {
    const lesson = await this.prisma.lesson.findUniqueOrThrow({
      where: { id },
    });
    return lesson;
  }

  async create(data: CreateLessonDto) {
    return this.prisma.lesson.create({
      data,
    });
  }

  async update(id: number, data: UpdateLessonDto) {
    return this.prisma.lesson.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.lesson.delete({
      where: { id },
    });
    return { deleted: true };
  }
}
