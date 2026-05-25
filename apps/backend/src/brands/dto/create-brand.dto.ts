import { z } from 'zod';

export const createBrandSchema = z.object({
  name: z.string().min(2, 'Название бренда слишком короткое'),
  category: z.enum(['MAKEUP', 'HAIR', 'PERFUME', 'SKINCARE', 'OTHER']),
  managerId: z.string().uuid('Некорректный managerId'),
});

export type CreateBrandDto = z.infer<typeof createBrandSchema>;
