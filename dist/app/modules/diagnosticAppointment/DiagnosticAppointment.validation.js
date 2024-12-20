"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticAppointmentValidation = void 0;
const zod_1 = require("zod");
const createDiagnosticAppointment = zod_1.z.object({
    body: zod_1.z.object({
        diagnosticId: zod_1.z
            .number({ required_error: 'Diagnostic ID is required' })
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
const updateDiagnosticAppointment = zod_1.z.object({
    body: zod_1.z.object({
        diagnosticId: zod_1.z.number().int().positive().optional(),
        appointmentId: zod_1.z.number().int().positive().optional(),
        price: zod_1.z.number().int().nonnegative().optional(),
        result: zod_1.z.string().optional(),
        status: zod_1.z.enum(['Pending', 'Completed', 'InProgress']).optional(),
    }),
});
exports.DiagnosticAppointmentValidation = {
    createDiagnosticAppointment,
    updateDiagnosticAppointment,
};
