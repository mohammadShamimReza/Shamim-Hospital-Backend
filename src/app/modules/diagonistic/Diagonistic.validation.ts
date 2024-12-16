import { z } from 'zod';

const createDiagnostic = z.object({
  body: z.object({
    diagnosticName: z.string({
      required_error: 'diagnosticName is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    appointmentId: z.number().optional(), // appointmentId is optional
    result: z.string().optional(), // result is optional
    status: z
      .enum(['Pending', 'Completed'], {
        required_error: 'status is required',
      })
      .optional(), // Default value in schema makes it optional
  }),
});

const updateDiagnostic = z.object({
  body: z.object({
    diagnosticName: z.string().optional(),
    price: z.number().optional(),
    appointmentId: z.number().optional(),
    result: z.string().optional(),
    status: z.enum(['Pending', 'Completed']).optional(),
  }),
});

export const DiagnosticValidation = {
  createDiagnostic,
  updateDiagnostic,
};
