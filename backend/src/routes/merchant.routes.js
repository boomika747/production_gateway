import express from "express";
import { createMerchant, getMerchants } from "../controllers/merchant.controller.js";
import { validateMerchant } from "../middlewares/merchant.validation.js";
const router = express.Router();



router.post("/", validateMerchant, createMerchant);

router.get("/", getMerchants);

export default router;
