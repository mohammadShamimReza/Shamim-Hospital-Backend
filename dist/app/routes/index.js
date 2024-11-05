import express from "express";
import { authRoutes } from "../modules/auth/Auth.routes";
import { DoctorRoutes } from "../modules/doctor/Doctor.routes";
import { NurseRoutes } from "../modules/nurse/Nurse.routes";
import { ServiceRoutes } from '../modules/Service/Service.routes';
import { AdminRoutes } from '../modules/admin/Admin.routes';
import { AppointmentRoutes } from '../modules/appointment/Appointment.routes';
import { NoticeRoutes } from "../modules/notice/Notice.routes";
import { RoomRoutes } from '../modules/room/Room.routes';
import { StaffRoutes } from "../modules/staff/Staff.routes";
import { UserRoutes } from '../modules/user/User.routes';
const router = express.Router();
const moduleRoutes = [
    { path: '/auth', routes: authRoutes },
    {
        path: '/admin',
        routes: AdminRoutes,
    },
    {
        path: '/doctor',
        routes: DoctorRoutes,
    },
    {
        path: '/nurse',
        routes: NurseRoutes,
    },
    {
        path: '/room',
        routes: RoomRoutes,
    },
    {
        path: '/notice',
        routes: NoticeRoutes,
    },
    {
        path: '/staff',
        routes: StaffRoutes,
    },
    {
        path: '/user',
        routes: UserRoutes,
    },
    {
        path: '/service',
        routes: ServiceRoutes,
    },
    {
        path: '/appointment',
        routes: AppointmentRoutes,
    },
];
// ! comment out the below line 
moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
