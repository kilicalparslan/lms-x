import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from '@prisma/client';

@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  async findAllAssignments(): Promise<Assignment[]> {
    return this.prisma.assignment.findMany();
  }

  async findAssignment(id: number): Promise<Assignment | null> {
    return this.prisma.assignment.findUnique({ where: { id } });
  }

  async findAssignmentOrFail(id: number): Promise<Assignment> {
    const assignment = await this.findAssignment(id);
    if (!assignment) {
      throw new NotFoundException(`Assignment with ID ${id} not found`);
    }
    return assignment;
  }

  async createAssignment(data: CreateAssignmentDto): Promise<Assignment> {
    return this.prisma.assignment.create({ data });
  }

  async deleteAssignment(id: number): Promise<Assignment> {
    return this.prisma.assignment.delete({ where: { id } });
  }
}
