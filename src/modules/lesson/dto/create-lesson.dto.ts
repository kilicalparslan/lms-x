import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  videoUrl?: string;

  @IsNumber()
  order: number;

  @IsNumber()
  courseId: number;
}
