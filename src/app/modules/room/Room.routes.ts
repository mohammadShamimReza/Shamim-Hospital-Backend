import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { RoomController } from './Room.controller';
import { RoomValidation } from './Room.validation';

const router = express.Router();

router.get('/:id', RoomController.getById);
router.get('/', RoomController.getAllFromDB);

router.post(
  '/create',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(RoomValidation.createRoom),
  RoomController.createRoom,
);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  validateRequest(RoomValidation.updateRoom),
  RoomController.updateRoom,
);

router.delete('/:id', auth(ENUM_USER_ROLE.ADMIN), RoomController.deleteRoom);

export const RoomRoutes = router;
