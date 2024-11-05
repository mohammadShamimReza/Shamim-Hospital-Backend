"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidation = void 0;
const zod_1 = require("zod");
const createService = zod_1.z.object({
    body: zod_1.z.object({
        serviceName: zod_1.z.string({
            required_error: 'Service name is required',
        }),
        description: zod_1.z.string({
            required_error: 'Description is required',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required',
        }),
        serviceType: zod_1.z
            .string({
            required_error: 'Service type is required',
        })
            .refine(val => ['Consultation', 'Surgery', 'Therapy'].includes(val), {
            message: 'Service type must be one of "Consultation", "Surgery", or "Therapy"',
        }),
        bodyPart: zod_1.z.string({
            required_error: 'Body part is required',
        }),
    }),
});
const updateService = zod_1.z.object({
    body: zod_1.z.object({
        serviceName: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        price: zod_1.z.number().optional(),
        serviceType: zod_1.z.string().optional(),
        bodyPart: zod_1.z.string().optional(),
    }),
});
exports.ServiceValidation = {
    createService,
    updateService,
};
