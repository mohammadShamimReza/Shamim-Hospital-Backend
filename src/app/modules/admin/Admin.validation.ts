import { z } from 'zod';

const createAdmin = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email format' }),
    password: z.string({ required_error: 'Password is required' }),
    address: z.string().optional(),
    profile_image: z.string().url().optional(),
    role: z.string({ required_error: 'Role is required' }),
  }),
});

const updateAdmin = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email({ message: 'Invalid email format' }).optional(),
    password: z.string().optional(),
    address: z.string().optional(),
    profile_image: z.string().url().optional(),
    role: z.string().optional(),
  }),
});

export const AdminValidation = {
  createAdmin,
  updateAdmin,
};
