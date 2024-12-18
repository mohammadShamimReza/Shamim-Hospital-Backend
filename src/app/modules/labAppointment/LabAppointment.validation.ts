import { z } from 'zod';

const createLabAppointment = z.object({
  body: z.object({
    laboratoryId: z
      .number({ required_error: 'Laboratory ID is required' })
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

const updateLabAppointment = z.object({
  body: z.object({
    laboratoryId: z.number().int().positive().optional(),
    appointmentId: z.number().int().positive().optional(),
    result: z.string().optional(),
    status: z.enum(['Pending', 'Completed', 'InProgress']).optional(),
  }),
});

export const LabAppointmentValidation = {
  createLabAppointment,
  updateLabAppointment,
};
