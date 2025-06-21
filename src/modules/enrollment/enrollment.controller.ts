import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { Enrollment } from '@prisma/client';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Get()
  findAllEnrollments(): Promise<Enrollment[]> {
    return this.enrollmentService.findAllEnrollments();
  }

  @Get(':id')
  findEnrollment(@Param('id') id: string): Promise<Enrollment | null> {
    return this.enrollmentService.findEnrollment(+id);
  }

  @Post()
  createEnrollment(@Body() body: CreateEnrollmentDto): Promise<Enrollment> {
    return this.enrollmentService.createEnrollment(body);
  }

  @Delete(':id')
  deleteEnrollment(@Param('id') id: string): Promise<Enrollment> {
    return this.enrollmentService.deleteEnrollment(+id);
  }
}
