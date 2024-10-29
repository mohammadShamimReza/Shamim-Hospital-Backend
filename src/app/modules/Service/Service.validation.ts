import { z } from 'zod';

const createService = z.object({
  body: z.object({
    serviceName: z.string({
      required_error: 'Service name is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    duration: z.number().int({
      message: 'Duration is required and must be an integer',
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
    specialty: z.string({
      required_error: 'Specialty is required',
    }),
    maxAppointments: z.number().int().optional(),
    departmentId: z.number().int().optional(),
  }),
});

const updateService = z.object({
  body: z.object({
    serviceName: z.string().optional(),
    description: z.string().optional(),
    duration: z.number().int().optional(),
    price: z.number().optional(),
    serviceType: z.string().optional(),
    bodyPart: z.string().optional(),
    specialty: z.string().optional(),
    maxAppointments: z.number().int().optional(),
    departmentId: z.number().int().optional(),
  }),
});

export const ServiceValidation = {
  createService,
  updateService,
};
