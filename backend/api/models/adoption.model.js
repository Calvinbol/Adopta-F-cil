const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Adoption = sequelize.define("adoption", {
  date_adoption: {
    type: DataTypes.DATE,
  },
},
  { timestamps: false }
);

module.exports = Adoption;
