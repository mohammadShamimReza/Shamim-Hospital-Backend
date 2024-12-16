import { z } from 'zod';

const createDiagnostic = z.object({
  body: z.object({
    diagnosticName: z.string({
      required_error: 'diagnosticName is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
  }),
});

const updateDiagnostic = z.object({
  body: z.object({
    diagnosticName: z.string().optional(),
    price: z.number().optional(),
  }),
});

export const DiagnosticValidation = {
  createDiagnostic,
  updateDiagnostic,
};
