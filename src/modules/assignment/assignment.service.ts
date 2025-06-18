import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { Assignment } from '@prisma/client';

@Injectable()
export class AssignmentService {
  constructor(private prisma: PrismaService) {}

  findAll(): Promise<Assignment[]> {
    return this.prisma.assignment.findMany();
  }

  findOne(id: number): Promise<Assignment | null> {
    return this.prisma.assignment.findUnique({ where: { id } });
  }

  create(data: CreateAssignmentDto): Promise<Assignment> {
    return this.prisma.assignment.create({ data });
  }

  delete(id: number): Promise<Assignment> {
    return this.prisma.assignment.delete({ where: { id } });
  }
}
