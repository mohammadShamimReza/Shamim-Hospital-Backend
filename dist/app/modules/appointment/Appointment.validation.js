"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentValidation = void 0;
const zod_1 = require("zod");
const createAppointment = zod_1.z.object({
    body: zod_1.z.object({
        doctorId: zod_1.z
            .number({ required_error: 'Doctor ID is required' })
            .int()
            .positive(),
        patientId: zod_1.z
            .number({ required_error: 'Patient ID is required' })
            .int()
            .positive(),
        appointmentDate: zod_1.z
            .string({ required_error: 'Appointment date is required' })
            .refine(date => !isNaN(Date.parse(date)), {
            message: 'Invalid date format',
        })
            .transform(date => new Date(date)), // Ensures it's in Date format
        serviceId: zod_1.z
            .number({ required_error: 'Service ID is required' })
            .int()
            .positive()
            .optional(),
    }),
});
const updateAppointment = zod_1.z.object({
    body: zod_1.z.object({
        doctorId: zod_1.z.number().int().positive().optional(),
        patientId: zod_1.z.number().int().positive().optional(),
        appointmentDate: zod_1.z
            .string()
            .refine(date => !isNaN(Date.parse(date)), {
            message: 'Invalid date format',
        })
            .optional()
            .transform(date => (date ? new Date(date) : undefined)), // Convert to Date if provided
        serviceId: zod_1.z.number().int().positive().optional(),
        prescription: zod_1.z.string().optional(),
    }),
});
exports.AppointmentValidation = {
    createAppointment,
    updateAppointment,
};
