const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class Color extends Model {}

Color.init({
    name: {
        type: DataTypes.STRING(255)
    }
},{ sequelize, modelName: 'colors', timestamp:true });

module.exports = Color;