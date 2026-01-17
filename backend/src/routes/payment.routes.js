import express from "express";
import { createPayment, getPayments } from "../controllers/payment.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, createPayment);
router.get("/", authMiddleware, getPayments);

export default router;
