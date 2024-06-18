const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Adoption = sequelize.define("pet", {
  date_adoption: {
    type: DataTypes.DATE,
  },
});

module.exports = Adoption;
