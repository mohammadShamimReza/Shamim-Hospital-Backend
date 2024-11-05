import { z } from 'zod';

const createAppointment = z.object({
  body: z.object({
    doctorId: z
      .number({ required_error: 'Doctor ID is required' })
      .int()
      .positive(),
    patientId: z
      .number({ required_error: 'Patient ID is required' })
      .int()
      .positive(),
    appointmentDate: z
      .string({ required_error: 'Appointment date is required' })
      .refine(date => !isNaN(Date.parse(date)), {
        message: 'Invalid date format',
      })
      .transform(date => new Date(date)), // Ensures it's in Date format
    serviceId: z
      .number({ required_error: 'Service ID is required' })
      .int()
      .positive()
      .optional(),
  }),
});

const updateAppointment = z.object({
  body: z.object({
    doctorId: z.number().int().positive().optional(),
    patientId: z.number().int().positive().optional(),
    appointmentDate: z
      .string()
      .refine(date => !isNaN(Date.parse(date)), {
        message: 'Invalid date format',
      })
      .optional()
      .transform(date => (date ? new Date(date) : undefined)), // Convert to Date if provided
    serviceId: z.number().int().positive().optional(),
    prescription: z.string().optional(),
  }),
});

export const AppointmentValidation = {
  createAppointment,
  updateAppointment,
};
