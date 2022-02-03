import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 아무 decorator도 없는 object 를 거른다.
      forbidNonWhitelisted: true, // whitelist에 없는 요소는 거른다.
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
