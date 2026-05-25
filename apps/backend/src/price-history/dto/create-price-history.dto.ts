import { z } from 'zod';

export const createPriceHistorySchema = z.object({
  price: z.number().optional(),

  oldPrice: z.number().optional(),

  discountPercent: z.number().optional(),

  pageStatus: z.string(),

  competitorLinkId: z.string().uuid(),
});

export type CreatePriceHistoryDto = z.infer<typeof createPriceHistorySchema>;
