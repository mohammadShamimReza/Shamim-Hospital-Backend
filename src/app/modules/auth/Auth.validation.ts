import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email('Invalid email format'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Password must be at least 8 characters'),
    address: z.string({ required_error: 'address is required' }), // Address is optional in the model
    profile_image: z.string().url('Invalid URL format'), // Optional and validated as a URL
    role: z.string({ required_error: 'role is required' }),
  }),
});

const login = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    role: z.string({ required_error: 'role is required' }), // Role is optional in the model
  }),
});

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password  is required',
    }),
    newPassword: z.string({
      required_error: 'New password  is required',
    }),
  }),
});

export const AuthValidation = {
  create,
  login,
  changePasswordZodSchema,
};






