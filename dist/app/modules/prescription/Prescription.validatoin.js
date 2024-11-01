import { z } from 'zod';
const createPrescription = z.object({
    body: z.object({
        appointmentId: z
            .number()
            .int({ message: 'Appointment ID is required' }),
        notes: z.string().optional(),
    }),
});
const updatePrescription = z.object({
    body: z.object({
        appointmentId: z.number().int().optional(),
        notes: z.string().optional(),
    }),
});
export const PrescriptionValidation = {
    createPrescription,
    updatePrescription,
};
