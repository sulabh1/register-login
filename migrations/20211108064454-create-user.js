"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING, allowNull: false },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true, isLowercase: true, contains: "@" },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { min: 10 },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
