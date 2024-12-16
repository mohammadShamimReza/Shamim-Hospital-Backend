import { z } from 'zod';

const createPharmacy = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    stockQuantity: z.number({
      required_error: 'stockQuantity is required',
    }),
    unitPrice: z.number({ required_error: 'unitPrice is required' }),
    expiryDate: z.string({ required_error: 'expiryDate is required' }),
    image: z.string().url().optional(),
  }),
});

const updatePharmacy = z.object({
  body: z.object({
    name: z.string().optional(),
    stockQuantity: z.number().optional(),
    unitPrice: z.number().optional(),
    expiryDate: z.string().optional(),
  }),
});

export const PharmacyValidation = {
  createPharmacy,
  updatePharmacy,
};
