import express from "express";
import { authRoutes } from "../modules/auth/Auth.routes";


const router = express.Router();

const moduleRoutes = [
  {path: '/auth', routes: authRoutes}
];

// ! comment out the below line 

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
