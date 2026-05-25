import { Module } from '@nestjs/common';
import { BrandsController } from './brands.controller.js';
import { BrandsService } from './brands.service.js';

@Module({
  providers: [BrandsService],
  controllers: [BrandsController],
})
export class BrandsModule {}
