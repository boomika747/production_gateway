import Merchant from "../models/merchant.model.js";

// CREATE merchant
export const createMerchant = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || name.trim() === "") {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    const merchant = await Merchant.create({ name, email });
    res.status(201).json(merchant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET merchants
export const getMerchants = async (req, res) => {
  try {
    const merchants = await Merchant.findAll();
    res.json(merchants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
