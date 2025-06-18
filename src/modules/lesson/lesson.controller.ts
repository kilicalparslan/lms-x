import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { CreateLessonDto } from './dto/create-lesson.dto';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lessonService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateLessonDto) {
    return this.lessonService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.lessonService.delete(+id);
  }
}
