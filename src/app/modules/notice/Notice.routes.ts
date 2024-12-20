import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { NoticeController } from './Notice.controller';
import { NoticeValidation } from './Notice.validation';

const router = express.Router();

router.get('/:id', NoticeController.getById);
router.get('/', NoticeController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(NoticeValidation.createNotice),
  NoticeController.createNotice,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(NoticeValidation.updateNotice),
  NoticeController.updateNotice,
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  NoticeController.deleteNotice,
);

export const NoticeRoutes = router;
