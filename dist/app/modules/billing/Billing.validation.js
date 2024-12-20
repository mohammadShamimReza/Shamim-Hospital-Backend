"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingValidation = void 0;
const zod_1 = require("zod");
const createBilling = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.number({
            required_error: 'userId is required',
        }),
        totalAmount: zod_1.z.number({
            required_error: 'totalAmount is required',
        }),
        paidAmount: zod_1.z.number({
            required_error: 'paidAmount is required',
        }),
        dueAmount: zod_1.z.number({
            required_error: 'dueAmount is required',
        }),
        appointmentId: zod_1.z.number().optional(), // appointmentId is optional
        paymentStatus: zod_1.z
            .enum(['Paid', 'Unpaid', 'Partially Paid'], {
            required_error: 'paymentStatus is required',
        })
            .optional(), // Default value in schema makes it optional
        invoiceDate: zod_1.z
            .string({ required_error: 'invoiceDate is required' })
            .datetime()
            .optional(), // Default value in schema makes it optional
    }),
});
const updateBilling = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.number().optional(),
        totalAmount: zod_1.z.number().optional(),
        paidAmount: zod_1.z.number().optional(),
        dueAmount: zod_1.z.number().optional(),
        appointmentId: zod_1.z.number().optional(),
        paymentStatus: zod_1.z.enum(['Paid', 'Unpaid', 'Partially Paid']).optional(),
        invoiceDate: zod_1.z.string().datetime().optional(),
    }),
});
exports.BillingValidation = {
    createBilling,
    updateBilling,
};
