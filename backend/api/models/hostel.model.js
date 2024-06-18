const { DataTypes } = requiere('sequelize')
const sequelize = requiere('../../db')

const Hostel = sequelize.define('hostel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.VARCHAR,
  },
  phone: {
    type: DataTypes.VARCHAR,
  },
  email: {
    type: DataTypes.VARCHAR,
  },
  website: {
    type: DataTypes.VARCHAR,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autonomous_community: {
    type: DataTypes.VARCHAR,
  },
})

module.exports = Hostel
