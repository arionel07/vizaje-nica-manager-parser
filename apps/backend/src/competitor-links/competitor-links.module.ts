import { Module } from '@nestjs/common';
import { CompetitorLinksController } from './competitor-links.controller.js';
import { CompetitorLinksService } from './competitor-links.service.js';

@Module({
  providers: [CompetitorLinksService],
  controllers: [CompetitorLinksController],
})
export class CompetitorLinksModule {}
