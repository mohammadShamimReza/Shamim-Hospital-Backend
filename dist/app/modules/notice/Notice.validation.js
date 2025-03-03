"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeValidation = void 0;
const zod_1 = require("zod");
const createNotice = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: 'Title is required' }),
        content: zod_1.z.string({ required_error: 'Content is required' }),
        expiryDate: zod_1.z.string({ required_error: 'expiryDate is required' }),
    }),
});
const updateNotice = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        content: zod_1.z.string().optional(),
        expiryDate: zod_1.z.string().optional(),
    }),
});
exports.NoticeValidation = {
    createNotice,
    updateNotice,
};
