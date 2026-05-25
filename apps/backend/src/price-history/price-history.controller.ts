import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { PriceHistoryService } from './price-history.service.js';

import type { CreatePriceHistoryDto } from './dto/create-price-history.dto.js';

@Controller('price-history')
export class PriceHistoryController {
  constructor(private readonly priceHistoryService: PriceHistoryService) {}

  @Post()
  create(@Body() body: CreatePriceHistoryDto) {
    return this.priceHistoryService.create(body);
  }

  @Get()
  findAll() {
    return this.priceHistoryService.findAll();
  }

  @Get(':competitorLinkId')
  findByCompetitorLink(@Param('competitorLinkId') competitorLinkId: string) {
    return this.priceHistoryService.findByCompetitorLink(competitorLinkId);
  }
}
