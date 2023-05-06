"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "raeparikesit@gmail.com",
          password: await bcrypt.hash("admin123", 10),
          role: "superadmin",
          createdAt: new Date(),
          updatedAt: null,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
