const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class Product extends Model {}

Product.init({
    name: {
        type: DataTypes.STRING(255)
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL
    },
    image: {
        type: DataTypes.STRING(255),
    },
    keywords: {
        type: DataTypes.TEXT
    }
},{ sequelize, modelName: 'products', timestamp:true });

module.exports = Product;