import Merchant from "../models/merchant.model.js";

const authMiddleware = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res.status(401).json({ error: "API key missing" });
  }

  const merchant = await Merchant.findOne({
    where: { apiKey, isActive: true }
  });

  if (!merchant) {
    return res.status(401).json({ error: "Invalid API key" });
  }

  req.merchant = merchant; // 🔥 IMPORTANT
  next();
};

export default authMiddleware;
