import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { MedicationController } from './Medication.controller';
import { MedicationValidation } from './Medication.validation';

const router = express.Router();

router.get('/:id', MedicationController.getById);
router.get('/', MedicationController.getAllFromDB);

router.post(
  '/create',
  // auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(MedicationValidation.createMedication),
  MedicationController.createMedication,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(MedicationValidation.updateMedication),
  MedicationController.updateMedication,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  MedicationController.deleteMedication,
);

export const MedicationRoutes = router;
