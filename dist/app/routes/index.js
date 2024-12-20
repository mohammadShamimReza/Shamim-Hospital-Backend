"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Auth_routes_1 = require("../modules/auth/Auth.routes");
const Doctor_routes_1 = require("../modules/doctor/Doctor.routes");
const Nurse_routes_1 = require("../modules/nurse/Nurse.routes");
const Admin_routes_1 = require("../modules/admin/Admin.routes");
const Appointment_routes_1 = require("../modules/appointment/Appointment.routes");
const DiagnosticAppointment_routes_1 = require("../modules/diagnosticAppointment/DiagnosticAppointment.routes");
const Diagonistic_routes_1 = require("../modules/diagonistic/Diagonistic.routes");
const Inventory_routes_1 = require("../modules/inventory/Inventory.routes");
const LabAppointment_routes_1 = require("../modules/labAppointment/LabAppointment.routes");
const Laboratory_routes_1 = require("../modules/Laboratory/Laboratory.routes");
const Notice_routes_1 = require("../modules/notice/Notice.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const Pharmacy_routes_1 = require("../modules/pharmacy/Pharmacy.routes");
const PharmacyAppointment_routes_1 = require("../modules/pharmacyAppointment/PharmacyAppointment.routes");
const Room_routes_1 = require("../modules/room/Room.routes");
const Service_routes_1 = require("../modules/Service/Service.routes");
const Staff_routes_1 = require("../modules/staff/Staff.routes");
const User_routes_1 = require("../modules/user/User.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/auth', routes: Auth_routes_1.authRoutes },
    {
        path: '/admin',
        routes: Admin_routes_1.AdminRoutes,
    },
    {
        path: '/doctor',
        routes: Doctor_routes_1.DoctorRoutes,
    },
    {
        path: '/nurse',
        routes: Nurse_routes_1.NurseRoutes,
    },
    {
        path: '/room',
        routes: Room_routes_1.RoomRoutes,
    },
    {
        path: '/notice',
        routes: Notice_routes_1.NoticeRoutes,
    },
    {
        path: '/staff',
        routes: Staff_routes_1.StaffRoutes,
    },
    {
        path: '/user',
        routes: User_routes_1.UserRoutes,
    },
    {
        path: '/service',
        routes: Service_routes_1.ServiceRoutes,
    },
    {
        path: '/appointment',
        routes: Appointment_routes_1.AppointmentRoutes,
    },
    {
        path: '/pharmacy',
        routes: Pharmacy_routes_1.PharmacyRoutes,
    },
    {
        path: '/pharmacyAppointment',
        routes: PharmacyAppointment_routes_1.PharmacyAppointmentRoutes,
    },
    {
        path: '/diagonostic',
        routes: Diagonistic_routes_1.DiagnosticRoutes,
    },
    {
        path: '/diagonosticAppointment',
        routes: DiagnosticAppointment_routes_1.DiagnosticAppointmentRoutes,
    },
    {
        path: '/inventory',
        routes: Inventory_routes_1.InventoryRoutes,
    },
    {
        path: '/laboratory',
        routes: Laboratory_routes_1.LaboratoryRoutes,
    },
    {
        path: '/laboratoryAppointment',
        routes: LabAppointment_routes_1.LabAppointmentRoutes,
    },
    {
        path: '/payment',
        routes: payment_routes_1.PaymentRoutes,
    },
];
// ! comment out the below line
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
