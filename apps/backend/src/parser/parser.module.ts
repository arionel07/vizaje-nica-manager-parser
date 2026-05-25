import { Module } from '@nestjs/common';
import { ParserController } from './parser.controller.js';
import { ParserService } from './parser.service.js';

@Module({
  providers: [ParserService],
  controllers: [ParserController],
})
export class ParserModule {}
