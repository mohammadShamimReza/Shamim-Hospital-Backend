"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaboratoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Laboratory_controller_1 = require("./Laboratory.controller");
const Laboratory_validation_1 = require("./Laboratory.validation");
const router = express_1.default.Router();
router.get('/:id', Laboratory_controller_1.LaboratoryController.getById);
router.get('/', Laboratory_controller_1.LaboratoryController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Laboratory_validation_1.LaboratoryValidation.createLaboratory), Laboratory_controller_1.LaboratoryController.createLaboratory);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Laboratory_validation_1.LaboratoryValidation.updateLaboratory), Laboratory_controller_1.LaboratoryController.updateLaboratory);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Laboratory_controller_1.LaboratoryController.deleteLaboratory);
exports.LaboratoryRoutes = router;
