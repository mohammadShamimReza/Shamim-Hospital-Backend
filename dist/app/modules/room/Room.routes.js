"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Room_controller_1 = require("./Room.controller");
const Room_validation_1 = require("./Room.validation");
const router = express_1.default.Router();
router.get('/:id', Room_controller_1.RoomController.getById);
router.get('/', Room_controller_1.RoomController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Room_validation_1.RoomValidation.createRoom), Room_controller_1.RoomController.createRoom);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Room_validation_1.RoomValidation.updateRoom), Room_controller_1.RoomController.updateRoom);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Room_controller_1.RoomController.deleteRoom);
exports.RoomRoutes = router;
