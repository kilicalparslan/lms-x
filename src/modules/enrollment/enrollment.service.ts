import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.enrollment.findMany();
  }

  async findOne(id: number) {
    const enrollment = await this.prisma.enrollment.findUniqueOrThrow({
      where: { id },
    });
    return enrollment;
  }

  async create(data: CreateEnrollmentDto) {
    return this.prisma.enrollment.create({
      data,
    });
  }

  async update(id: number, data: UpdateEnrollmentDto) {
    return this.prisma.enrollment.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.enrollment.delete({
      where: { id },
    });
    return { deleted: true };
  }
}
