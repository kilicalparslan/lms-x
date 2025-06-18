import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get()
  findAll() {
    return this.assignmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assignmentService.findOne(+id);
  }

  @Post()
  create(@Body() body: CreateAssignmentDto) {
    return this.assignmentService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.assignmentService.delete(+id);
  }
}
