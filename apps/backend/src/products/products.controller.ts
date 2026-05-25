import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import type { CreateProductDto } from './dto/create-product.dto.js';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() body: CreateProductDto) {
    return this.productsService.create(body);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string) {
    return this.productsService.search(query);
  }
}
