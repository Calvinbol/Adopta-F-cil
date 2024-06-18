const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Pet = sequelize.define('pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('dogs', 'cats'),
        allowNull: false,
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    gender: {
        type: DataTypes.ENUM('famale', 'male'),
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Pet