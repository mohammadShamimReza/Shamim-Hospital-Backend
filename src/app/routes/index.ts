import express from "express";


const router = express.Router();

const moduleRoutes = [
  {path: '', routes: ''}
];

// ! comment out the below line 

// moduleRoutes.forEach((route) => router.use(route.path, route.routes));
export default router;
