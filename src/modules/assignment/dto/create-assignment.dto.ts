import { IsInt, IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateAssignmentDto {
  @IsInt()
  lessonId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  instructions: string;

  @IsDateString()
  dueDate: string;

  @IsInt()
  maxScore: number;
}
