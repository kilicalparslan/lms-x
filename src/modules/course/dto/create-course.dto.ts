import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty({ message: 'Kurs başlığı boş olamaz.' })
  @MinLength(3, { message: 'Kurs başlığı en az 3 karakter olmalıdır.' })
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  isPublished: boolean;

  @IsInt({ message: 'teacherId sayısal bir değer olmalıdır.' })
  teacherId: number;
}
