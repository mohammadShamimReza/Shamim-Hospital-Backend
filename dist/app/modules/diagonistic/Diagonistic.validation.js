"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosticValidation = void 0;
const zod_1 = require("zod");
const createDiagnostic = zod_1.z.object({
    body: zod_1.z.object({
        diagnosticName: zod_1.z.string({
            required_error: 'diagnosticName is required',
        }),
        price: zod_1.z.number({
            required_error: 'price is required',
        }),
    }),
});
const updateDiagnostic = zod_1.z.object({
    body: zod_1.z.object({
        diagnosticName: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
    }),
});
exports.DiagnosticValidation = {
    createDiagnostic,
    updateDiagnostic,
};
