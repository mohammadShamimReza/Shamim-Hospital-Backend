"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyOnAppointmentValidation = void 0;
const zod_1 = require("zod");
const createPharmacyOnAppointment = zod_1.z.object({
    body: zod_1.z.object({
        appointmentId: zod_1.z
            .number({ required_error: 'Appointment ID is required' })
            .int()
            .positive({ message: 'Appointment ID must be a positive integer' }),
        pharmacyId: zod_1.z
            .number({ required_error: 'Pharmacy ID is required' })
            .int()
            .positive({ message: 'Pharmacy ID must be a positive integer' }),
    }),
});
const updatePharmacyOnAppointment = zod_1.z.object({
    body: zod_1.z.object({
        appointmentId: zod_1.z.number().int().positive().optional(),
        pharmacyId: zod_1.z.number().int().positive().optional(),
    }),
});
exports.PharmacyOnAppointmentValidation = {
    createPharmacyOnAppointment,
    updatePharmacyOnAppointment,
};
