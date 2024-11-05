"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Appointment_controller_1 = require("./Appointment.controller");
const Appointment_validation_1 = require("./Appointment.validation");
const router = express_1.default.Router();
router.get('/:id', Appointment_controller_1.AppointmentController.getById);
router.get('/', Appointment_controller_1.AppointmentController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Appointment_validation_1.AppointmentValidation.createAppointment), Appointment_controller_1.AppointmentController.createAppointment);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Appointment_validation_1.AppointmentValidation.updateAppointment), Appointment_controller_1.AppointmentController.updateAppointment);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Appointment_controller_1.AppointmentController.deleteAppointment);
exports.AppointmentRoutes = router;
