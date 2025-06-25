import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { Lesson } from '@prisma/client';
import { ResponseUtil } from 'src/utils/response-util';
import { DeleteResponse } from 'src/types';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  async findAllLessons(): Promise<Lesson[]> {
    return await this.lessonService.findAllLessons();
  }

  @Get(':id')
  async findLesson(@Param('id', ParseIntPipe) id: number): Promise<Lesson> {
    return this.lessonService.findLessonOrFail(id);
  }

  @Post()
  async createLesson(@Body() body: CreateLessonDto): Promise<Lesson> {
    return this.lessonService.createLesson(body);
  }

  @Delete(':id')
  async deleteLesson(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DeleteResponse> {
    await this.lessonService.deleteLesson(id);
    return ResponseUtil.successDelete(id, 'Lesson');
  }
}
