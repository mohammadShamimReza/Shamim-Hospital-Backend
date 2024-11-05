"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Doctor_controller_1 = require("./Doctor.controller");
const Doctor_validation_1 = require("./Doctor.validation");
const router = express_1.default.Router();
router.get('/:id', Doctor_controller_1.DoctorController.getById);
router.get('/', Doctor_controller_1.DoctorController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Doctor_validation_1.DoctorValidation.createDoctor), Doctor_controller_1.DoctorController.createDoctor);
router.patch('/:id', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Doctor_validation_1.DoctorValidation.updateDoctor), Doctor_controller_1.DoctorController.updateDoctor);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Doctor_controller_1.DoctorController.deleteDoctor);
exports.DoctorRoutes = router;
