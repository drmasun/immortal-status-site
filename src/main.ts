import { NestFactory } from '@nestjs/core';
import { configService } from './environments/config.service';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  await app.listen(configService.get('PORT'));
}
bootstrap();
