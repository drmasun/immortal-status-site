import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entity/user';
import { ConfigModule } from './environments/config.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..", 'public'),
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
