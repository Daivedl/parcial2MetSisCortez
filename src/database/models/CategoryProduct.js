const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class CategoryProduct extends Model {}

CategoryProduct.init({

}, { sequelize, modelName: 'categoryProducts', timestamps: true})

module.exports = CategoryProduct;