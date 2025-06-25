import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  async findAllEnrollments(): Promise<Enrollment[]> {
    return this.enrollmentService.findAllEnrollments();
  }

  @Get(':id')
  async findEnrollment(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Enrollment> {
    return this.enrollmentService.findEnrollmentOrFail(id);
  }

  @Post()
  async createEnrollment(
    @Body() body: CreateEnrollmentDto,
  ): Promise<Enrollment> {
    return await this.enrollmentService.createEnrollment(body);
  }

  @Delete(':id')
  async deleteEnrollment(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Enrollment> {
    return this.enrollmentService.deleteEnrollment(id);
  }
}
