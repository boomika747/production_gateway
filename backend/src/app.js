import express from "express";
import webhookRoutes from "./routes/webhook.routes.js";
import merchantRoutes from "./routes/merchant.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

const app = express();

app.use(express.json());

// ✅ Order matters
app.use("/api/merchants", merchantRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/webhooks", webhookRoutes);
export default app;
