import { z } from 'zod';

export const createProductSchema = z.object({
  name: z.string().min(2),

  article: z.string().optional(),

  barcode: z.string().optional(),

  category: z.string().optional(),

  ourPrice: z.number().optional(),

  ourUrl: z.string().url().optional(),

  brandId: z.string().uuid(),
});

export type CreateProductDto = z.infer<typeof createProductSchema>;
