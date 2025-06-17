import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { CourseModule } from './modules/course/course.module';
import { LessonModule } from './modules/lesson/lesson.module';

@Module({
  imports: [PrismaModule, UserModule, CourseModule, LessonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
