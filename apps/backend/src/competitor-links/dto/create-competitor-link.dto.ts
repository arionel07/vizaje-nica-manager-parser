import { z } from 'zod';

export const createCompetitorLinkSchema = z
  .object({
    competitorName: z.string().min(2),

    competitorProductName: z.string().optional(),

    url: z.string().url(),

    productId: z.string().uuid().optional(),

    productVariantId: z.string().uuid().optional(),
  })
  .refine((data) => data.productId || data.productVariantId, {
    message: 'Нужно указать productId или productVariantId',
    path: ['productId'],
  })
  .refine((data) => !(data.productId && data.productVariantId), {
    message: 'Нельзя одновременно указать productId и productVariantId',
    path: ['productVariantId'],
  });

export type CreateCompetitorLinkDto = z.infer<
  typeof createCompetitorLinkSchema
>;
