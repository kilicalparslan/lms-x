import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @IsInt()
  assignmentId: number;

  @IsInt()
  studentId: number;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsInt()
  score?: number;
}
