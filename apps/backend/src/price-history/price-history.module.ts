import { Module } from '@nestjs/common';
import { PriceHistoryController } from './price-history.controller.js';
import { PriceHistoryService } from './price-history.service.js';

@Module({
  providers: [PriceHistoryService],
  controllers: [PriceHistoryController],
})
export class PriceHistoryModule {}
