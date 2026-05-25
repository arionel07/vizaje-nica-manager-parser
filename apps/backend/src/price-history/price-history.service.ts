import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  CreatePriceHistoryDto,
  createPriceHistorySchema,
} from './dto/create-price-history.dto.js';

@Injectable()
export class PriceHistoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePriceHistoryDto) {
    const validatedData = createPriceHistorySchema.parse(data);

    return this.prisma.priceHistory.create({
      data: validatedData,
    });
  }

  async findAll() {
    return this.prisma.priceHistory.findMany({
      include: {
        competitorLink: {
          include: {
            product: {
              include: {
                brand: true,
              },
            },
          },
        },
      },

      orderBy: {
        checkedAt: 'desc',
      },

      take: 100,
    });
  }

  async findByCompetitorLink(competitorLinkId: string) {
    return this.prisma.priceHistory.findMany({
      where: {
        competitorLinkId,
      },

      orderBy: {
        checkedAt: 'desc',
      },
    });
  }
}
