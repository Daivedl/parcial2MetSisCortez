const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class Category extends Model {}

Category.init({

    name: {
        type: DataTypes.STRING(255)
    }
}, { sequelize, modelName: 'categories', timestamps: true });

module.exports = Category;