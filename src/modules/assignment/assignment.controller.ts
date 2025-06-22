import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AssignmentService } from './assignment.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from '@prisma/client';
import { DeleteResponse } from 'src/types';
import { ResponseUtil } from 'src/utils/response-util';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly assignmentService: AssignmentService) {}

  @Get()
  async findAllAssignments(): Promise<Assignment[]> {
    return await this.assignmentService.findAllAssignments();
  }

  @Get(':id')
  async findAssignment(@Param('id') id: string): Promise<Assignment> {
    return this.assignmentService.findAssignmentOrFail(+id);
  }

  @Post()
  async createAssignment(
    @Body() body: CreateAssignmentDto,
  ): Promise<Assignment> {
    return await this.assignmentService.createAssignment(body);
  }

  @Delete(':id')
  async deleteAssignment(@Param('id') id: string): Promise<DeleteResponse> {
    await this.assignmentService.deleteAssignment(+id);
    return ResponseUtil.successDelete(id, 'Assignment');
  }
}
