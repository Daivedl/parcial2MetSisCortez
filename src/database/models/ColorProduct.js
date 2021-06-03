const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class ColorProduct extends Model {}

ColorProduct.init({
    
},{ sequelize, modelName: 'colorProducts', timestamp:true });

module.exports = ColorProduct;