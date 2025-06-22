import { Injectable, NotFoundException } from '@nestjs/common';
import { Submission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class SubmissionService {
  constructor(private prisma: PrismaService) {}

  async findAllSubmissions(): Promise<Submission[]> {
    return this.prisma.submission.findMany();
  }

  async findSubmission(id: number): Promise<Submission | null> {
    return this.prisma.submission.findUnique({ where: { id } });
  }

  async findSubmissionOrFail(id: number): Promise<Submission> {
    const submission = await this.findSubmission(id);
    if (!submission) {
      throw new NotFoundException(`Submission with ID ${id} not found`);
    }
    return submission;
  }

  async createSubmission(data: CreateSubmissionDto): Promise<Submission> {
    return this.prisma.submission.create({ data });
  }

  async deleteSubmission(id: number): Promise<Submission> {
    return this.prisma.submission.delete({ where: { id } });
  }
}
