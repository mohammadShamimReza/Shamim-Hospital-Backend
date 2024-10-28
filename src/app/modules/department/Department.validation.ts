import { z } from 'zod';

const createDepartment = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    nurses: z.number().int().nonnegative().optional(),
    staff: z.number().int().nonnegative().optional(),
  }),
});

const updateDepartment = z.object({
  body: z.object({
    name: z.string().optional(),
    nurses: z.number().int().nonnegative().optional(),
    staff: z.number().int().nonnegative().optional(),
  }),
});

export const DepartmentValidation = {
  createDepartment,
  updateDepartment,
};
