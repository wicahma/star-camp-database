const {
  getOrderDetail,
  deleteOrderDetail,
  updateOrderDetail,
  insertOrderDetail,
} = require("../models/orderDetailModel");

exports.getAllOrderDetail = (req, res) => {
  const querySql = "SELECT * FROM orderdetails";
  getOrderDetail(res, querySql);
};

exports.getOrderDetailByIdOrder = (req, res) => {
  const id = req.params.id;
  const querySql = `SELECT * FROM orderdetails WHERE id_order = ${id}`;
  getOrderDetail(res, querySql);
};

exports.createOrderDetail = (req, res) => {
  const data = { ...req.body };
  const querySql = "INSERT INTO orderdetails SET ?";
  insertOrderDetail(res, querySql, data);
};

exports.deleteOrderDetail = (req, res) => {
  const querySearch = "SELECT * FROM orderdetails WHERE id_order_detail = ?";
  const queryDelete = "DELETE FROM orderdetails WHERE id_order_detail = ?";
  deleteOrderDetail(res, querySearch, queryDelete, parseInt(req.params.id));
};
