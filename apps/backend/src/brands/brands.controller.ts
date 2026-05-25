import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandsService } from './brands.service.js';
import type { CreateBrandDto } from './dto/create-brand.dto.js';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post()
  create(@Body() body: CreateBrandDto) {
    return this.brandsService.create(body);
  }

  @Get()
  findAll() {
    return this.brandsService.findAll();
  }
}
