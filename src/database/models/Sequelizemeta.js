const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class Sequelizemeta extends Model {}

ColorProduct.init({
    name: {
        type: DataTypes.STRING(255)
    }
},{ sequelize, modelName: 'sequelizemetas', timestamp:true });

module.exports = Sequelizemeta;