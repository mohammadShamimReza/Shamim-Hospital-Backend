import { z } from 'zod';

const createLaboratory = z.object({
  body: z.object({
    testName: z.string({ required_error: 'testName is required' }),
    price: z.number({ required_error: 'price is required' }),
  }),
});

const updateLaboratory = z.object({
  body: z.object({
    testName: z.string().optional(),
    price: z.number().optional(),
  }),
});

export const LaboratoryValidation = {
  createLaboratory,
  updateLaboratory,
};
