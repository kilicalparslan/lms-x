import { Injectable } from '@nestjs/common';
import { Enrollment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async findAllEnrollments(): Promise<Enrollment[]> {
    return this.prisma.enrollment.findMany();
  }

  async findEnrollment(id: number): Promise<Enrollment | null> {
    return this.prisma.enrollment.findUnique({
      where: { id },
    });
  }

  async createEnrollment(data: CreateEnrollmentDto): Promise<Enrollment> {
    return this.prisma.enrollment.create({
      data,
    });
  }

  async deleteEnrollment(id: number): Promise<Enrollment> {
    return this.prisma.enrollment.delete({
      where: { id },
    });
  }
}
