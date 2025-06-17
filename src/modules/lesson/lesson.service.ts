import { Injectable } from '@nestjs/common';
import { Lesson } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Injectable()
export class LessonService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Lesson[]> {
    return this.prisma.lesson.findMany();
  }

  findOne(id: number): Promise<Lesson | null> {
    return this.prisma.lesson.findUnique({ where: { id } });
  }

  create(data: CreateLessonDto): Promise<Lesson> {
    return this.prisma.lesson.create({ data });
  }

  delete(id: number): Promise<Lesson> {
    return this.prisma.lesson.delete({ where: { id } });
  }
}
