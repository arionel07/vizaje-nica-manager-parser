import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  CreateProductDto,
  createProductSchema,
} from './dto/create-product.dto.js';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProductDto) {
    const validateData = createProductSchema.parse(data);

    return this.prisma.product.create({
      data: validateData,
    });
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        brand: true,
        competitorLinks: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async search(query: string) {
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            article: {
              contains: query,
              mode: 'insensitive',
            },
          },
          {
            barcode: {
              contains: query,
              mode: 'insensitive',
            },
          },
        ],
      },

      include: {
        brand: true,
        competitorLinks: true,
      },
      take: 20,
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
