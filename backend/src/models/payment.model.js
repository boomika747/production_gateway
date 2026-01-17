import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Merchant from "./merchant.model.js";

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

  currency: {
    type: DataTypes.STRING,
    allowNull: false
  },

  status: {
    type: DataTypes.STRING,
    allowNull: false
  },

  merchantId: {
    type: DataTypes.UUID,
    allowNull: false
  }
});

// ✅ SINGLE FK DEFINITION
Payment.belongsTo(Merchant, {
  foreignKey: "merchantId"
});

export default Payment;
