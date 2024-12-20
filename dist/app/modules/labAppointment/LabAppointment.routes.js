"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabAppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const LabAppointment_controller_1 = require("./LabAppointment.controller");
const LabAppointment_validation_1 = require("./LabAppointment.validation");
const router = express_1.default.Router();
router.get('/:id', LabAppointment_controller_1.LabAppointmentController.getById);
router.get('/', LabAppointment_controller_1.LabAppointmentController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(LabAppointment_validation_1.LabAppointmentValidation.createLabAppointment), LabAppointment_controller_1.LabAppointmentController.createLabAppointment);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(LabAppointment_validation_1.LabAppointmentValidation.updateLabAppointment), LabAppointment_controller_1.LabAppointmentController.updateLabAppointment);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), LabAppointment_controller_1.LabAppointmentController.deleteLabAppointment);
exports.LabAppointmentRoutes = router;
