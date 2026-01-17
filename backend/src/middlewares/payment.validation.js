export const validatePayment = (req, res, next) => {
  const { amount, currency, status } = req.body;

  if (amount === undefined) {
    return res.status(400).json({ error: "Amount is required" });
  }

  if (amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  if (!currency) {
    return res.status(400).json({ error: "Currency is required" });
  }

  if (!status) {
    return res.status(400).json({ error: "Status is required" });
  }

  next();
};
