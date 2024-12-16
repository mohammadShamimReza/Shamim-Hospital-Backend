import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { BillingController } from './Billing.controller';
import { BillingValidation } from './Billing.validation';

const router = express.Router();

router.get('/:id', BillingController.getById);
router.get('/', BillingController.getAllFromDB);

router.post(
  '/create',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BillingValidation.createBilling),
  BillingController.createBilling,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(BillingValidation.updateBilling),
  BillingController.updateBilling,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  BillingController.deleteBilling,
);

export const BillingRoutes = router;
