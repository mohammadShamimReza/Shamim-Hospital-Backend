import { z } from 'zod';

const createAsset = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    serialNumber: z.string({
      required_error: 'serialNumber is required',
    }),
    purchaseDate: z
      .string({ required_error: 'purchaseDate is required' })
      .datetime(),
    status: z
      .enum(['Operational', 'Under Maintenance', 'Out of Service'], {
        required_error: 'status is required',
      })
      .optional(), // Default value in schema makes it optional
  }),
});

const updateAsset = z.object({
  body: z.object({
    name: z.string().optional(),
    serialNumber: z.string().optional(),
    purchaseDate: z.string().datetime().optional(),
    status: z
      .enum(['Operational', 'Under Maintenance', 'Out of Service'])
      .optional(),
  }),
});

export const AssetValidation = {
  createAsset,
  updateAsset,
};
