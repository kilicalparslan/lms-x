import { IsInt, IsOptional, IsNumber } from 'class-validator';

export class CreateEnrollmentDto {
  @IsInt()
  userId: number;

  @IsInt()
  courseId: number;

  @IsOptional()
  @IsNumber()
  progress?: number;
}
