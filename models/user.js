"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true, isLowercase: true, contains: "@" },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { min: 10 },
      },
    },

    {
      sequelize,
      modelName: "User",
    }
  );
  User.addHook("beforeCreate", async (user) => {
    user.password = await bcrypt.hash(user.password, 12);
  });
  User.validatePassword = async function (providedPassword, storedPassword) {
    return await bcrypt.compare(providedPassword, storedPassword);
  };

  return User;
};
