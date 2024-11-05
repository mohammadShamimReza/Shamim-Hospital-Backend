import { z } from 'zod';
const createNotice = z.object({
    body: z.object({
        title: z.string({ required_error: 'Title is required' }),
        content: z.string({ required_error: 'Content is required' }),
    }),
});
const updateNotice = z.object({
    body: z.object({
        title: z.string().optional(),
        content: z.string().optional(),
    }),
});
export const NoticeValidation = {
    createNotice,
    updateNotice,
};
