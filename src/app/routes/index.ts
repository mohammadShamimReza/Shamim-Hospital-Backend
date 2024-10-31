import express from "express";
import { authRoutes } from "../modules/auth/Auth.routes";
import { DoctorRoutes } from "../modules/doctor/Doctor.routes";
import { NurseRoutes } from "../modules/nurse/Nurse.routes";

import { RoomRoutes } from "../modules/room/Room.routes";
import { NoticeRoutes } from "../modules/notice/Notice.routes";
import { MedicationRoutes } from "../modules/medication/Medicaiton.routes";
import { StaffRoutes } from "../modules/staff/Staff.routes";
import { UserRoutes } from "../modules/user/User.routes";
import { ServiceRoutes } from "../modules/Service/Service.routes";
import { AdminRoutes } from "../modules/admin/Admin.routes";


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
    path: '/medication',
    routes: MedicationRoutes,
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
];

// ! comment out the below line 

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
