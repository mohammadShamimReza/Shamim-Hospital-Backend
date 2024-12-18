import express from 'express';
import { paymentController } from './payment.controller';

const router = express.Router();

router.post('/init', paymentController.init);
router.get('/success/:userId', paymentController.success);
router.get('/validate', paymentController.validate);
router.post('/refund', paymentController.initiateRefund);
router.get('/refundQuery', paymentController.refundQuery);
router.get(
  '/transactionQueryById',
  paymentController.transactionQueryByTransactionId,
);
router.get(
  '/transactionQueryBySession',
  paymentController.transactionQueryBySessionId,
);

export const PaymentRoutes = router;
