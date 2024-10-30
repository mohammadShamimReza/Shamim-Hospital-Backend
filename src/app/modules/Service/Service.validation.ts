import { z } from 'zod';

const createService = z.object({
  body: z.object({
    serviceName: z.string({
      required_error: 'Service name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),

    price: z.number({
      required_error: 'Price is required',
    }),
    serviceType: z
      .string({
        required_error: 'Service type is required',
      })
      .refine(val => ['Consultation', 'Surgery', 'Therapy'].includes(val), {
        message:
          'Service type must be one of "Consultation", "Surgery", or "Therapy"',
      }),
    bodyPart: z.string({
      required_error: 'Body part is required',
    }),
    
  }),
});

const updateService = z.object({
  body: z.object({
    serviceName: z.string().optional(),
    description: z.string().optional(),
    price: z.number().optional(),
    serviceType: z.string().optional(),
    bodyPart: z.string().optional(),
  }),
});

export const ServiceValidation = {
  createService,
  updateService,
};
