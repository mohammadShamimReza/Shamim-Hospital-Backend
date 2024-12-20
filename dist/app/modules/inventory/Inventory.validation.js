"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryValidation = void 0;
const zod_1 = require("zod");
const createInventory = zod_1.z.object({
    body: zod_1.z.object({
        itemName: zod_1.z.string({
            required_error: 'itemName is required',
        }),
        quantity: zod_1.z
            .number({
            required_error: 'quantity is required',
        })
            .min(1, 'quantity must be at least 1'),
        price: zod_1.z
            .number({
            required_error: 'price is required',
        })
            .min(1, 'price must be at least 1'),
        category: zod_1.z.string({
            required_error: 'category is required',
        }), // Could use z.enum if predefined categories are necessary
        purchaseDate: zod_1.z.string({ required_error: 'purchaseDate is required' }),
        status: zod_1.z
            .enum(['Available', 'In Use', 'Damaged'], {
            required_error: 'status is required',
        })
            .optional(), // Default value in schema makes it optional
    }),
});
const updateInventory = zod_1.z.object({
    body: zod_1.z.object({
        itemName: zod_1.z.string().optional(),
        quantity: zod_1.z.number().min(1).optional(),
        price: zod_1.z.number().min(1).optional(),
        category: zod_1.z.string().optional(),
        purchaseDate: zod_1.z.string().optional(),
        status: zod_1.z.enum(['Available', 'In Use', 'Damaged']).optional(),
    }),
});
exports.InventoryValidation = {
    createInventory,
    updateInventory,
};
