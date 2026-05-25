import { Controller, Param, Post } from '@nestjs/common';
import { ParserService } from './parser.service.js';

@Controller('parser')
export class ParserController {
  constructor(private readonly parserService: ParserService) {}

  @Post('check-link/:id')
  checkLink(@Param('id') id: string) {
    return this.parserService.checkLink(id);
  }
}
