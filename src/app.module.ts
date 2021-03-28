import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Project } from './entity/Project';
import { Role } from './entity/Role';
import { User } from './entity/User';
import { ConfigModule } from './environments/config.module';
import { UserRepo } from './repositories/user.repository';

@Module({
  imports: [
    ConfigModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([
      Role,
      Project,
      User
    ]),
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..", 'public'),
  }),
  ],
  controllers: [AppController],
  providers: [AppService, UserRepo],
})
export class AppModule {}
