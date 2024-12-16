import { z } from 'zod';

const createBilling = z.object({
  body: z.object({
    userId: z.number({
      required_error: 'userId is required',
    }),
    totalAmount: z.number({
      required_error: 'totalAmount is required',
    }),
    paidAmount: z.number({
      required_error: 'paidAmount is required',
    }),
    dueAmount: z.number({
      required_error: 'dueAmount is required',
    }),
    appointmentId: z.number().optional(), // appointmentId is optional
    paymentStatus: z
      .enum(['Paid', 'Unpaid', 'Partially Paid'], {
        required_error: 'paymentStatus is required',
      })
      .optional(), // Default value in schema makes it optional
    invoiceDate: z
      .string({ required_error: 'invoiceDate is required' })
      .datetime()
      .optional(), // Default value in schema makes it optional
  }),
});

const updateBilling = z.object({
  body: z.object({
    userId: z.number().optional(),
    totalAmount: z.number().optional(),
    paidAmount: z.number().optional(),
    dueAmount: z.number().optional(),
    appointmentId: z.number().optional(),
    paymentStatus: z.enum(['Paid', 'Unpaid', 'Partially Paid']).optional(),
    invoiceDate: z.string().datetime().optional(),
  }),
});

export const BillingValidation = {
  createBilling,
  updateBilling,
};
