import { z } from 'zod';

const createLaboratory = z.object({
  body: z.object({
    testName: z.string({ required_error: 'testName is required' }),
    price: z.number({ required_error: 'price is required' }),
    appointmentId: z.number().optional(), // appointmentId is optional
    testDate: z
      .string({ required_error: 'testDate is required' })
      .datetime()
      .optional(), // Default value in schema means it's optional
    result: z.string().optional(), // Optional as per schema
    status: z
      .enum(['Pending', 'Completed', 'InProgress'], {
        required_error: 'status is required',
      })
      .optional(), // Default value in schema makes it optional
  }),
});

const updateLaboratory = z.object({
  body: z.object({
    testName: z.string().optional(),
    price: z.number().optional(),
    appointmentId: z.number().optional(),
    testDate: z.string().datetime().optional(),
    result: z.string().optional(),
    status: z.enum(['Pending', 'Completed', 'InProgress']).optional(),
  }),
});

export const LaboratoryValidation = {
  createLaboratory,
  updateLaboratory,
};
