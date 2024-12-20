'use strict';

const { v4: uuidv4 } = require('uuid');
import { Request, Response } from 'express';
import prisma from '../../../shared/prisma';
import { paymentService } from './payment.service';

const frontend_url = process.env.FRONTEND_URL;
const backend_url = process.env.BACKEND_URL;

export const paymentController = {
  // Initialize a transaction
  async init(req: Request, res: Response) {
    const {
      total_amount,
      currency,
      product_name,
      product_category,
      product_profile,
      cus_name,
      cus_email,
      cus_add1,
      cus_country,
      cus_phone,
      userId,
    } = req.body;

    const tran_id = uuidv4();

    const data = {
      total_amount,
      currency,
      tran_id, // Unique transaction ID
      success_url: `${frontend_url}/payment/success/${userId}`,
      fail_url: `${frontend_url}/payment/fail/${userId}`,
      cancel_url: `${frontend_url}/payment/cancel/${userId}`,
      ipn_url: `${frontend_url}/payment/ipn`,
      shipping_method: 'Courier',
      product_name,
      product_category,
      product_profile,
      cus_name,
      cus_email,
      cus_add1,
      cus_add2: req.query.cus_add2 || 'Dhaka',
      cus_city: req.query.cus_city || 'Dhaka',
      cus_state: req.query.cus_state || 'Dhaka',
      cus_postcode: req.query.cus_postcode || '1000',
      cus_country,
      cus_phone,
      cus_fax: req.query.cus_fax || '00000000000',
      ship_name: req.query.ship_name || 'Customer Name',
      ship_add1: req.query.ship_add1 || 'Dhaka',
      ship_add2: req.query.ship_add2 || 'Dhaka',
      ship_city: req.query.ship_city || 'Dhaka',
      ship_state: req.query.ship_state || 'Dhaka',
      ship_postcode: req.query.ship_postcode || 1000,
      ship_country: req.query.ship_country || 'Bangladesh',
    };

    try {
      const response = await paymentService.initTransaction(data);

      // Update the user with the transaction ID (adjust based on your database)
      const resul = await updateUser(parseInt(userId));
      console.log(resul, 'update Database'); // Replace with your database logic

      res.status(200).json({ url: response.GatewayPageURL, response });
    } catch (error) {
      console.error('Error initializing transaction:', error);
      res.status(400).json({ message: 'Unable to initialize transaction' });
    }
  },

  async success(req: Request, res: Response) {
    const { userId } = req.params;
    console.log(userId, 'success');
    try {
      // Update the user's payment status (adjust based on your database)
      const result = await updateUser(parseInt(userId)); // Replace with your database logic

      if (result) {
        res.redirect(`${frontend_url}/payment/redirectSuccess/${userId}`);
      } else {
        res.redirect(`${frontend_url}/contact`);
      }
    } catch (error) {
      console.error('Error handling success:', error);
      res.status(500).json({ message: 'Transaction handling failed' });
    }
  },

  // Validate a transaction
  async validate(req: Request, res: Response) {
    const { val_id } = req.query;

    try {
      const validationResponse =
        await paymentService.validateTransaction(val_id);
      res.status(200).json(validationResponse);
    } catch (error) {
      console.error('Error validating transaction:', error);
      res.status(400).json({ message: 'Transaction validation failed' });
    }
  },

  // Initiate a refund
  async initiateRefund(req: Request, res: Response) {
    const { refund_amount, bank_tran_id, refe_id } = req.body;

    try {
      const refundResponse = await paymentService.initiateRefund({
        refund_amount,
        bank_tran_id,
        refe_id,
      });
      res.status(200).json(refundResponse);
    } catch (error) {
      console.error('Error initiating refund:', error);
      res.status(400).json({ message: 'Refund initiation failed' });
    }
  },

  // Query the status of a refund
  async refundQuery(req: Request, res: Response) {
    const { refund_ref_id } = req.query;

    try {
      const queryResponse = await paymentService.refundQuery(refund_ref_id);
      res.status(200).json(queryResponse);
    } catch (error) {
      console.error('Error querying refund status:', error);
      res.status(400).json({ message: 'Refund query failed' });
    }
  },

  // Query the status of a transaction by Transaction ID
  async transactionQueryByTransactionId(req: Request, res: Response) {
    const { tran_id } = req.query;

    try {
      const queryResponse =
        await paymentService.transactionQueryByTransactionId(tran_id);
      res.status(200).json(queryResponse);
    } catch (error) {
      console.error('Error querying transaction status:', error);
      res.status(400).json({ message: 'Transaction query failed' });
    }
  },

  // Query the status of a transaction by Session ID
  async transactionQueryBySessionId(req: Request, res: Response) {
    const { sessionkey } = req.query;

    try {
      const queryResponse =
        await paymentService.transactionQueryBySessionId(sessionkey);
      res.status(200).json(queryResponse);
    } catch (error) {
      console.error('Error querying transaction by session ID:', error);
      res
        .status(400)
        .json({ message: 'Transaction query by session ID failed' });
    }
  },
};

const updateUser = async (id: number) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: {
      payment: true,
    },
  });
  return result;
};
// Helper function to update user (replace with your actual database logic)
