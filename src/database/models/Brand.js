const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class Brand extends Model {}

Brand.init({
    name: {
        type: DataTypes.STRING(255)
    }
}, { sequelize, modelName: 'brands', timestamps: true})

module.exports = Brand;