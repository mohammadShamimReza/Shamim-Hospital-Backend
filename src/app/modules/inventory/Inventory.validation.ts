import { z } from 'zod';

const createInventory = z.object({
  body: z.object({
    itemName: z.string({
      required_error: 'itemName is required',
    }),
    quantity: z
      .number({
        required_error: 'quantity is required',
      })
      .min(1, 'quantity must be at least 1'),
    price: z
      .number({
        required_error: 'price is required',
      })
      .min(1, 'price must be at least 1'),
    category: z.string({
      required_error: 'category is required',
    }), // Could use z.enum if predefined categories are necessary
    purchaseDate: z.string({ required_error: 'purchaseDate is required' }),
    status: z
      .enum(['Available', 'In Use', 'Damaged'], {
        required_error: 'status is required',
      })
      .optional(), // Default value in schema makes it optional
  }),
});

const updateInventory = z.object({
  body: z.object({
    itemName: z.string().optional(),
    quantity: z.number().min(1).optional(),
    price: z.number().min(1).optional(),
    category: z.string().optional(),
    purchaseDate: z.string().optional(),
    status: z.enum(['Available', 'In Use', 'Damaged']).optional(),
  }),
});

export const InventoryValidation = {
  createInventory,
  updateInventory,
};
