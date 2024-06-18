const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Pet = sequelize.define('pet', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('dog', 'cat'),
        allowNull: false,
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
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
        type: DataTypes.TEXT,
        allowNull: false,
    },

    },
    {timestamps: false}
    
)

module.exports = Pet