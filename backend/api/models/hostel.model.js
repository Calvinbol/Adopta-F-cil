const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Hostel = sequelize.define('hostel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  website: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autonomous_community: {
    type: DataTypes.STRING,
  },
},
  { timestamps: false }
)

module.exports = Hostel
