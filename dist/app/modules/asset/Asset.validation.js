"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetValidation = void 0;
const zod_1 = require("zod");
const createAsset = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name is required',
        }),
        serialNumber: zod_1.z.string({
            required_error: 'serialNumber is required',
        }),
        purchaseDate: zod_1.z
            .string({ required_error: 'purchaseDate is required' })
            .datetime(),
        status: zod_1.z
            .enum(['Operational', 'Under Maintenance', 'Out of Service'], {
            required_error: 'status is required',
        })
            .optional(), // Default value in schema makes it optional
    }),
});
const updateAsset = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        serialNumber: zod_1.z.string().optional(),
        purchaseDate: zod_1.z.string().datetime().optional(),
        status: zod_1.z
            .enum(['Operational', 'Under Maintenance', 'Out of Service'])
            .optional(),
    }),
});
exports.AssetValidation = {
    createAsset,
    updateAsset,
};
