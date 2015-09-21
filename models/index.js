var dbHelper = require('./model');

exports.adminModel=dbHelper.getModel('admin');
exports.userModel=dbHelper.getModel('user');
exports.goodsModel=dbHelper.getModel('goods');
exports.cartModel=dbHelper.getModel('cart');
exports.orderModel=dbHelper.getModel('orders');
exports.categoryModel=dbHelper.getModel('category');