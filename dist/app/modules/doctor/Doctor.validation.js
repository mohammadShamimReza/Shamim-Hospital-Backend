"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorValidation = void 0;
const zod_1 = require("zod");
const createDoctor = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Name is required' }),
        email: zod_1.z
            .string({ required_error: 'Email is required' })
            .email({ message: 'Invalid email format' }),
        password: zod_1.z.string({ required_error: 'Password is required' }),
        address: zod_1.z.string().optional(),
        profile_image: zod_1.z.string().url().optional(),
        role: zod_1.z.string({ required_error: 'Role is required' }),
        designation: zod_1.z.string({ required_error: 'Role is required' }),
        passingYear: zod_1.z.string({ required_error: 'Role is required' }),
    }),
});
const updateDoctor = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        email: zod_1.z.string().email({ message: 'Invalid email format' }).optional(),
        password: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        role: zod_1.z.string().optional(),
    }),
});
exports.DoctorValidation = {
    createDoctor,
    updateDoctor,
};
