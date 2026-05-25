import { PrismaPg } from '@prisma/adapter-pg';
import {
  BrandCategory,
  PrismaClient,
  UserRole,
} from '../generated/prisma/client.js';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  const admin = await prisma.user.upsert({
    where: {
      email: 'admin@test.com',
    },
    update: {},
    create: {
      name: 'Arsen',
      email: 'admin@test.com',
      password: '123456',
      role: UserRole.ADMIN,
    },
  });

  await prisma.brand.upsert({
    where: {
      id: '11111111-1111-4111-8111-111111111111',
    },
    update: {},
    create: {
      id: '11111111-1111-4111-8111-111111111111',
      name: 'Dior',
      category: BrandCategory.PERFUME,
      managerId: admin.id,
    },
  });

  console.log('Seed completed');
}

const product = await prisma.product.upsert({
  where: {
    id: '22222222-2222-4222-8222-222222222222',
  },
  update: {},
  create: {
    id: '22222222-2222-4222-8222-222222222222',
    name: 'Dior Sauvage Eau de Parfum',
    category: 'Perfume',
    ourPrice: 2500,
    ourUrl: 'https://vizaje-nica.com/dior-sauvage',
    brandId: '11111111-1111-4111-8111-111111111111',
  },
});

await prisma.productVariant.upsert({
  where: {
    id: '33333333-3333-4333-8333-333333333333',
  },
  update: {},
  create: {
    id: '33333333-3333-4333-8333-333333333333',
    volume: '100ml',
    ourPrice: 3200,
    ourUrl: 'https://vizaje-nica.com/dior-sauvage-100ml',
    productId: product.id,
  },
});

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
