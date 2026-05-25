import { NestFactory } from '@nestjs/core';
import 'dotenv/config';
import { AppModule } from './app.module.js';
import { ZodExceptionFilter } from './common/filters/zod-exception.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ZodExceptionFilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
