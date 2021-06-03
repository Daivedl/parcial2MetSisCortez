const { Model, DataTypes} = require("sequelize"); // Import the built-in data type
const sequelize = require('../config/config');
class User extends Model {}

User.init({
    firstName: {
        type: DataTypes.STRING(255)
    },
    lastName: {
        type: DataTypes.STRING(255)
    },
    email: {
        type: DataTypes.STRING(255)
    },
    password: {
        type: DataTypes.STRING(255)
    }
},{ sequelize, modelName: 'users', timestamp:true });

module.exports = User;