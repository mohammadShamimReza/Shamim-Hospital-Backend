"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NurseValidation = void 0;
const zod_1 = require("zod");
const createNurse = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z
            .string({ required_error: 'Email is required' })
            .email({ message: 'Invalid email format' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
        address: zod_1.z.string().optional(),
        profile_image: zod_1.z.string().url().optional(),
        role: zod_1.z.string({ required_error: 'Role is required' }),
        phone: zod_1.z.number({ required_error: 'Phone is required' }),
    }),
});
const updateNurse = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email({ message: 'Invalid email format' }).optional(),
        password: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        profile_image: zod_1.z.string().url().optional(),
        role: zod_1.z.string().optional(),
        phone: zod_1.z.number().optional(),
    }),
});
exports.NurseValidation = {
    createNurse,
    updateNurse,
};
