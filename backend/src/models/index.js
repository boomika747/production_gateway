import Merchant from "./merchant.model.js";
import Payment from "./payment.model.js";

// 🔗 Associations
Merchant.hasMany(Payment, { foreignKey: "MerchantId" });
Payment.belongsTo(Merchant, { foreignKey: "MerchantId" });

export { Merchant, Payment };
