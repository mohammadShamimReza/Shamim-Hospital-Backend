import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { PharmacyController } from './Pharmacy.controller';
import { PharmacyValidation } from './Pharmacy.validation';

const router = express.Router();

router.get('/:id', PharmacyController.getById);
router.get('/', PharmacyController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(PharmacyValidation.createPharmacy),
  PharmacyController.createPharmacy,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(PharmacyValidation.updatePharmacy),
  PharmacyController.updatePharmacy,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  PharmacyController.deletePharmacy,
);

export const PharmacyRoutes = router;
