"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmacyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Pharmacy_controller_1 = require("./Pharmacy.controller");
const Pharmacy_validation_1 = require("./Pharmacy.validation");
const router = express_1.default.Router();
router.get('/:id', Pharmacy_controller_1.PharmacyController.getById);
router.get('/', Pharmacy_controller_1.PharmacyController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Pharmacy_validation_1.PharmacyValidation.createPharmacy), Pharmacy_controller_1.PharmacyController.createPharmacy);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Pharmacy_validation_1.PharmacyValidation.updatePharmacy), Pharmacy_controller_1.PharmacyController.updatePharmacy);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Pharmacy_controller_1.PharmacyController.deletePharmacy);
exports.PharmacyRoutes = router;
