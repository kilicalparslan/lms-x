import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.submission.findMany();
  }

  async findOne(id: number) {
    const submission = await this.prisma.submission.findUniqueOrThrow({
      where: { id },
    });
    return submission;
  }

  async create(data: CreateSubmissionDto) {
    return this.prisma.submission.create({
      data,
    });
  }

  async update(id: number, data: UpdateSubmissionDto) {
    return this.prisma.submission.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.submission.delete({
      where: { id },
    });
    return { deleted: true };
  }
}
