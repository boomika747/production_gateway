import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import crypto from "crypto";


const Merchant = sequelize.define("Merchant", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  apiKey: {
    type: DataTypes.STRING,
    unique: true
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  hooks: {
    beforeCreate: (merchant) => {
      merchant.apiKey = crypto.randomBytes(32).toString("hex");
    }
  }
});



export default Merchant;
