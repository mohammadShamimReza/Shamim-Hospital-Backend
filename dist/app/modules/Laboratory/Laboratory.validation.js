"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoryValidation = void 0;
const zod_1 = require("zod");
const createLaboratory = zod_1.z.object({
    body: zod_1.z.object({
        testName: zod_1.z.string({ required_error: 'testName is required' }),
        price: zod_1.z.number({ required_error: 'price is required' }),
    }),
});
const updateLaboratory = zod_1.z.object({
    body: zod_1.z.object({
        testName: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
    }),
});
exports.LaboratoryValidation = {
    createLaboratory,
    updateLaboratory,
};
