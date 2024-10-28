import { z } from 'zod';

const createService = z.object({
  body: z.object({
    serviceName: z.string({ required_error: 'Service name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    duration: z.number().int({ message: 'Duration is required' }),
    price: z.number({ required_error: 'Price is required' }),
    departmentId: z.number().int().optional(),
  }),
});

const updateService = z.object({
  body: z.object({
    serviceName: z.string().optional(),
    description: z.string().optional(),
    duration: z.number().int().optional(),
    price: z.number().optional(),
    departmentId: z.number().int().optional(),
  }),
});

export const ServiceValidation = {
  createService,
  updateService,
};
