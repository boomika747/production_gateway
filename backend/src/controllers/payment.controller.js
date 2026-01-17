import Payment from "../models/payment.model.js";
import { triggerWebhooks } from "../services/webhook.service.js";

export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create({
      amount: req.body.amount,
      currency: req.body.currency,
      status: req.body.status,
      merchantId: req.merchant.id
    });

    // 🔔 Trigger webhook ONLY on SUCCESS
    if (payment.status === "SUCCESS") {
      await triggerWebhooks(req.merchant.id, "payment.success", payment);
    }

    res.status(201).json(payment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getPayments = async (req, res) => {
  const payments = await Payment.findAll({
    where: { MerchantId: req.merchant.id }

  });
  res.json(payments);
};
