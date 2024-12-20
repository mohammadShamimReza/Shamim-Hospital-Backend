"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabAppointmentValidation = void 0;
const zod_1 = require("zod");
const createLabAppointment = zod_1.z.object({
    body: zod_1.z.object({
        laboratoryId: zod_1.z
            .number({ required_error: 'Laboratory ID is required' })
            .int()
            .positive(),
        appointmentId: zod_1.z
            .number({ required_error: 'Appointment ID is required' })
            .int()
            .positive(),
        result: zod_1.z.string().optional(),
        status: zod_1.z
            .enum(['Pending', 'Completed', 'InProgress'], {
            required_error: 'Status is required',
        })
            .default('Pending')
            .optional(),
    }),
});
const updateLabAppointment = zod_1.z.object({
    body: zod_1.z.object({
        laboratoryId: zod_1.z.number().int().positive().optional(),
        appointmentId: zod_1.z.number().int().positive().optional(),
        result: zod_1.z.string().optional(),
        status: zod_1.z.enum(['Pending', 'Completed', 'InProgress']).optional(),
    }),
});
exports.LabAppointmentValidation = {
    createLabAppointment,
    updateLabAppointment,
};
