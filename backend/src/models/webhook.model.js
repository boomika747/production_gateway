import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Webhook = sequelize.define("Webhook", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  merchantId: {
    type: DataTypes.UUID,
    allowNull: false
  },

  url: {
    type: DataTypes.STRING,
    allowNull: false
  },

  event: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Webhook;
