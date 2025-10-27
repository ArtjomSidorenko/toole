import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // http://localhost:3001/api <======
  app.setGlobalPrefix("api");
  app.enableCors;
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
