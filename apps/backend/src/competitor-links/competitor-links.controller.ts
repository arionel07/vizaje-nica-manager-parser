import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompetitorLinksService } from './competitor-links.service.js';
import type { CreateCompetitorLinkDto } from './dto/create-competitor-link.dto.js';

@Controller('competitor-links')
export class CompetitorLinksController {
  constructor(
    private readonly competitorLinksService: CompetitorLinksService,
  ) {}

  @Post()
  create(@Body() body: CreateCompetitorLinkDto) {
    return this.competitorLinksService.create(body);
  }

  @Get()
  findAll() {
    return this.competitorLinksService.findAll();
  }
}
