import Merchant from "../models/merchant.model.js";

export const apiKeyAuth = async (req, res, next) => {
  const apiKey = req.header("x-api-key");

  if (!apiKey) {
    return res.status(401).json({ error: "API key missing" });
  }

  const merchant = await Merchant.findOne({ where: { apiKey } });

  if (!merchant) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  req.merchant = merchant; // attach merchant
  next();
};
