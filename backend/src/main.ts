import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://chat-room-demo-three.vercel.app', // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization'
  });
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true, 
    forbidNonWhitelisted: true, 
    validationError: { target: false, value: false },
  }));
  await app.listen(3001); // Backend URL
}

bootstrap();

