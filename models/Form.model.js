const { DataTypes, Model } = require("sequelize");
const sequelize = require("../utils/database");

class Form extends Model {}

Form.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },

  {
    sequelize,
    modelName: "Form",
    timestamps: true,
  }
);

module.exports = Form;
