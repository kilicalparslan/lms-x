import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { AssignmentModule } from './modules/assignment/assignment.module';
import { EnrollmentModule } from './modules/enrollment/enrollment.module';
import { SubmissionModule } from './modules/submission/submission.module';

@Module({
  imports: [PrismaModule, UserModule, CourseModule, LessonModule, AssignmentModule, EnrollmentModule, SubmissionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
