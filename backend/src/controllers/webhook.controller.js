import Webhook from "../models/webhook.model.js";

export const registerWebhook = async (req, res) => {
  try {
    const webhook = await Webhook.create({
      merchantId: req.merchant.id,
      url: req.body.url,
      event: req.body.event
    });

    res.status(201).json(webhook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
