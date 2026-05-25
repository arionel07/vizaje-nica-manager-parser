import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { BrandsModule } from './brands/brands.module.js';
import { CompetitorLinksModule } from './competitor-links/competitor-links.module.js';
import { ParserModule } from './parser/parser.module.js';
import { PriceHistoryModule } from './price-history/price-history.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { ProductsModule } from './products/products.module.js';

@Module({
  imports: [
    PrismaModule,
    BrandsModule,
    ProductsModule,
    CompetitorLinksModule,
    PriceHistoryModule,
    ParserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
