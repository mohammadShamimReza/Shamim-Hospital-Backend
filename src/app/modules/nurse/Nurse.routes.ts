import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { NurseController } from './Nurse.controller';
import { NurseValidation } from './Nurse.validation';

const router = express.Router();

router.get('/:id', NurseController.getById);
router.get('/', NurseController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(NurseValidation.createNurse),
  NurseController.createNurse,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.Nuarse),
  validateRequest(NurseValidation.updateNurse),
  NurseController.updateNurse,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), NurseController.deleteNurse);

export const NurseRoutes = router;
