import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { UpdateAssignmentDto } from './dto/update-assignment.dto';

@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.assignment.findMany();
  }

  async findOne(id: number) {
    const assignment = await this.prisma.assignment.findUniqueOrThrow({
      where: { id },
    });
    return assignment;
  }

  async create(data: CreateAssignmentDto) {
    return this.prisma.assignment.create({
      data,
    });
  }

  async update(id: number, data: UpdateAssignmentDto) {
    return this.prisma.assignment.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.assignment.delete({
      where: { id },
    });
    return { deleted: true };
  }
}
