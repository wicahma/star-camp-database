const {
  getAllProduct,
  deleteProduct,
  updateProduct,
  insertProduct,
} = require("../models/productModel");

exports.getProduct = (req, res) => {
  const querySql = "SELECT * FROM products";
  getAllProduct(res, querySql);
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  const querySql = `SELECT * FROM products WHERE id_product = ${id}`;
  getProduct(res, querySql);
};

exports.updateProduct = (req, res) => {
  const data = { ...req.body };
  const querySearch = "SELECT * FROM products WHERE id_product = ?";
  const queryUpdate = "UPDATE products SET ? WHERE id_product = ?";
  updateProduct(res, querySearch, queryUpdate, req.params.id, data);
};

exports.createProduct = (req, res) => {
  const data = { ...req.body };
  const querySql = "INSERT INTO products SET ?";
  insertProduct(res, querySql, data);
};

exports.deleteproduct = (req, res) => {
  const querySearch = "SELECT * FROM products WHERE id_product = ?";
  const queryDelete = "DELETE FROM products WHERE id_product = ?";
  deleteProduct(res, querySearch, queryDelete, parseInt(req.params.id));
};
