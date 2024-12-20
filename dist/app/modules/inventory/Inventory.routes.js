"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middleware/auth"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const Inventory_controller_1 = require("./Inventory.controller");
const Inventory_validation_1 = require("./Inventory.validation");
const router = express_1.default.Router();
router.get('/:id', Inventory_controller_1.InventoryController.getById);
router.get('/', Inventory_controller_1.InventoryController.getAllFromDB);
router.post('/create', 
// auth(ENUM_USER_ROLE.ADMIN),
(0, validateRequest_1.default)(Inventory_validation_1.InventoryValidation.createInventory), Inventory_controller_1.InventoryController.createInventory);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(Inventory_validation_1.InventoryValidation.updateInventory), Inventory_controller_1.InventoryController.updateInventory);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), Inventory_controller_1.InventoryController.deleteInventory);
exports.InventoryRoutes = router;
