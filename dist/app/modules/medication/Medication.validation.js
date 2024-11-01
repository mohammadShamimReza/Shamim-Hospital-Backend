import { z } from 'zod';
const createMedication = z.object({
    body: z.object({
        name: z.string({ required_error: 'Name is required' }),
        dosage: z.string({ required_error: 'Dosage is required' }),
        prescriptionId: z
            .number()
            .int({ message: 'Prescription ID is required' }),
    }),
});
const updateMedication = z.object({
    body: z.object({
        name: z.string().optional(),
        dosage: z.string().optional(),
        prescriptionId: z.number().int().optional(),
    }),
});
export const MedicationValidation = {
    createMedication,
    updateMedication,
};
