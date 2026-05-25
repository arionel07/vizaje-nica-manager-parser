import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  CreateCompetitorLinkDto,
  createCompetitorLinkSchema,
} from './dto/create-competitor-link.dto.js';

@Injectable()
export class CompetitorLinksService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCompetitorLinkDto) {
    const validatedData = createCompetitorLinkSchema.parse(data);

    return this.prisma.competitorLink.create({
      data: validatedData,
    });
  }

  async findAll() {
    return this.prisma.competitorLink.findMany({
      include: {
        product: {
          include: {
            brand: true,
          },
        },
        productVariant: {
          include: {
            product: {
              include: {
                brand: true,
              },
            },
          },
        },
      },
    });
  }
}
