import express from "express";
import { registerWebhook } from "../controllers/webhook.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, registerWebhook);

export default router;
