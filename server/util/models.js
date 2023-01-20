const {DataTypes} = require('sequelize')
const db = require('./database')

module.exports = {
    User: db.define("user", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        username: {
            type: DataTypes.STRING({length: 25}),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }),
    Shoe: db.define("shoe", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        image: DataTypes.STRING({length: 500}),
        description: DataTypes.STRING({length: 500})
    }),
    Cart: db.define("cart", {
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        }
    })
}