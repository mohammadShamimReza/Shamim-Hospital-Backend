import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { LaboratoryController } from './Laboratory.controller';
import { LaboratoryValidation } from './Laboratory.validation';

const router = express.Router();

router.get('/:id', LaboratoryController.getById);
router.get('/', LaboratoryController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(LaboratoryValidation.createLaboratory),
  LaboratoryController.createLaboratory,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(LaboratoryValidation.updateLaboratory),
  LaboratoryController.updateLaboratory,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  LaboratoryController.deleteLaboratory,
);

export const LaboratoryRoutes = router;
