import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateBrandDto, createBrandSchema } from './dto/create-brand.dto.js';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBrandDto) {
    const validateData = createBrandSchema.parse(data);

    return this.prisma.brand.create({
      data: validateData,
    });
  }

  async findAll() {
    return this.prisma.brand.findMany({
      include: {
        manager: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
