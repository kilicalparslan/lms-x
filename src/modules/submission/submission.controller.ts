import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SubmissionService } from './submission.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { ResponseUtil } from 'src/utils/response-util';

@Controller('submission')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}

  @Get()
  async findAllSubmissions() {
    return this.submissionService.findAllSubmissions();
  }

  @Get(':id')
  async findSubmission(@Param('id') id: string) {
    return this.submissionService.findSubmissionOrFail(+id);
  }

  @Post()
  async createSubmission(@Body() body: CreateSubmissionDto) {
    return this.submissionService.createSubmission(body);
  }

  @Delete(':id')
  async deleteSubmission(@Param('id') id: string) {
    await this.submissionService.deleteSubmission(+id);
    return ResponseUtil.successDelete(id, 'Submission');
  }
}
