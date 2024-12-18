import { z } from 'zod';

const createDiagnosticAppointment = z.object({
  body: z.object({
    diagnosticId: z
      .number({ required_error: 'Diagnostic ID is required' })
      .int()
      .positive(),
    appointmentId: z
      .number({ required_error: 'Appointment ID is required' })
      .int()
      .positive(),

    result: z.string().optional(),
    status: z
      .enum(['Pending', 'Completed', 'InProgress'], {
        required_error: 'Status is required',
      })
      .default('Pending')
      .optional(),
  }),
});

const updateDiagnosticAppointment = z.object({
  body: z.object({
    diagnosticId: z.number().int().positive().optional(),
    appointmentId: z.number().int().positive().optional(),
    price: z.number().int().nonnegative().optional(),
    result: z.string().optional(),
    status: z.enum(['Pending', 'Completed', 'InProgress']).optional(),
  }),
});

export const DiagnosticAppointmentValidation = {
  createDiagnosticAppointment,
  updateDiagnosticAppointment,
};
