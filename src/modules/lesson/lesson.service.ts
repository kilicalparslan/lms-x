import { Injectable, NotFoundException } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  async findAllLessons(): Promise<Lesson[]> {
    return this.prisma.lesson.findMany();
  }

  async findLesson(id: number): Promise<Lesson | null> {
    return this.prisma.lesson.findUnique({ where: { id } });
  }

  async findLessonOrFail(id: number): Promise<Lesson> {
    const lesson = await this.findLesson(id);
    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${id} not found`);
    }
    return lesson;
  }

  async createLesson(data: CreateLessonDto): Promise<Lesson> {
    return this.prisma.lesson.create({ data });
  }

  async deleteLesson(id: number): Promise<Lesson> {
    return this.prisma.lesson.delete({ where: { id } });
  }
}
