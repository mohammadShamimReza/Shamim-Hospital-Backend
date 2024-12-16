import { z } from 'zod';

const createPharmacy = z.object({
  body: z.object({
    name: z.string({ required_error: 'name is required' }),
    namstockQuantitye: z.number({
      required_error: 'stockQuantity is required',
    }),
    unitPrice: z.number({ required_error: 'unitPrice is required' }),
    expiryDate: z.date({ required_error: 'expiryDate is required' }),
  }),
});

const updatePharmacy = z.object({
  body: z.object({
    name: z.string().optional(),
    namstockQuantitye: z.number().optional(),
    unitPrice: z.number().optional(),
    expiryDate: z.date().optional(),
  }),
});

export const PharmacyValidation = {
  createPharmacy,
  updatePharmacy,
};
