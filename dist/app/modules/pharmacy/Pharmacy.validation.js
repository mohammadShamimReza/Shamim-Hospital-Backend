"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyValidation = void 0;
const zod_1 = require("zod");
const createPharmacy = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'name is required' }),
        stockQuantity: zod_1.z.number({
            required_error: 'stockQuantity is required',
        }),
        unitPrice: zod_1.z.number({ required_error: 'unitPrice is required' }),
        expiryDate: zod_1.z.string({ required_error: 'expiryDate is required' }),
        image: zod_1.z.string().url().optional(),
    }),
});
const updatePharmacy = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        stockQuantity: zod_1.z.number().optional(),
        unitPrice: zod_1.z.number().optional(),
        expiryDate: zod_1.z.string().optional(),
    }),
});
exports.PharmacyValidation = {
    createPharmacy,
    updatePharmacy,
};
