import express from 'express';
import { authRoutes } from '../modules/auth/Auth.routes';
import { DoctorRoutes } from '../modules/doctor/Doctor.routes';
import { NurseRoutes } from '../modules/nurse/Nurse.routes';

import { AdminRoutes } from '../modules/admin/Admin.routes';
import { AppointmentRoutes } from '../modules/appointment/Appointment.routes';
import { DiagnosticAppointmentRoutes } from '../modules/diagnosticAppointment/DiagnosticAppointment.routes';
import { DiagnosticRoutes } from '../modules/diagonistic/Diagonistic.routes';
import { InventoryRoutes } from '../modules/inventory/Inventory.routes';
import { LabAppointmentRoutes } from '../modules/labAppointment/LabAppointment.routes';
import { LaboratoryRoutes } from '../modules/Laboratory/Laboratory.routes';
import { NoticeRoutes } from '../modules/notice/Notice.routes';
import { PaymentRoutes } from '../modules/payment/payment.routes';
import { PharmacyRoutes } from '../modules/pharmacy/Pharmacy.routes';
import { PharmacyAppointmentRoutes } from '../modules/pharmacyAppointment/PharmacyAppointment.routes';
import { RoomRoutes } from '../modules/room/Room.routes';
import { ServiceRoutes } from '../modules/Service/Service.routes';
import { StaffRoutes } from '../modules/staff/Staff.routes';
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

  {
    path: '/pharmacy',
    routes: PharmacyRoutes,
  },
  {
    path: '/pharmacyAppointment',
    routes: PharmacyAppointmentRoutes,
  },
  {
    path: '/diagonostic',
    routes: DiagnosticRoutes,
  },
  {
    path: '/diagonosticAppointment',
    routes: DiagnosticAppointmentRoutes,
  },
  {
    path: '/inventory',
    routes: InventoryRoutes,
  },
  {
    path: '/laboratory',
    routes: LaboratoryRoutes,
  },
  {
    path: '/laboratoryAppointment',
    routes: LabAppointmentRoutes,
  },
  {
    path: '/payment',
    routes: PaymentRoutes,
  },
];

// ! comment out the below line

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
