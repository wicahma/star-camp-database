const {
  getOrder,
  deleteOrder,
  updateOrder,
  insertOrder,
} = require("../models/orderModel");

exports.getAllOrder = (req, res) => {
  const querySql = "SELECT * FROM orders";
  getOrder(res, querySql);
};

exports.getOrderByUser = (req, res) => {
  const id = req.params.id;
  const querySql = `SELECT * FROM orders WHERE id_user = ${id}`;
  getOrder(res, querySql);
};

exports.updateOrder = (req, res) => {
  const data = { ...req.body };
  const querySearch = "SELECT * FROM orders WHERE id_order = ?";
  const queryUpdate = "UPDATE orders SET ? WHERE id_order = ?";
  updateOrder(res, querySearch, queryUpdate, req.params.id, data);
};

exports.createOrder = (req, res) => {
  const data = { ...req.body };
  const querySql = "INSERT INTO orders SET ?";
  insertOrder(res, querySql, data);
};

exports.deleteOrder = (req, res) => {
  const querySearch = "SELECT * FROM orders WHERE id_order = ?";
  const queryDelete = "DELETE FROM orders WHERE id_order = ?";
  deleteOrder(res, querySearch, queryDelete, parseInt(req.params.id));
};