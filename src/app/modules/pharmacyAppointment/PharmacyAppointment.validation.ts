import { z } from 'zod';

const createPharmacyOnAppointment = z.object({
  body: z.object({
    appointmentId: z
      .number({ required_error: 'Appointment ID is required' })
      .int()
      .positive({ message: 'Appointment ID must be a positive integer' }),
    pharmacyId: z
      .number({ required_error: 'Pharmacy ID is required' })
      .int()
      .positive({ message: 'Pharmacy ID must be a positive integer' }),
  }),
});

const updatePharmacyOnAppointment = z.object({
  body: z.object({
    appointmentId: z.number().int().positive().optional(),
    pharmacyId: z.number().int().positive().optional(),
  }),
});

export const PharmacyOnAppointmentValidation = {
  createPharmacyOnAppointment,
  updatePharmacyOnAppointment,
};
