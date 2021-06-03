const Category = require('./Category');
const CategoryProduct = require('./CategoryProduct');
const Color = require('./Color');
const ColorProduct = require('./ColorProduct');
const Product = require('./Product');
const Sequelizemeta = require('./Sequelizemeta');
const User = require('./User');
const Brand = require('./Brand');

Category.hasMany(CategoryProduct);
Product.hasMany(CategoryProduct);
User.hasMany(Product);
Brand.hasMany(Product);
Product.hasMany(ColorProduct);
Color.hasMany(ColorProduct);
