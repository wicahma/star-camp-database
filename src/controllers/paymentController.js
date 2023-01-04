const {
    getPay,
    deletePay,
    updatePay,
    insertPay,
  } = require("../models/paymentModel");
  
  exports.getAllPay = (req, res) => {
    const querySql = "SELECT * FROM payments";
    getPay(res, querySql);
  };
  
  exports.getPayByUser = (req, res) => {
    const id = req.params.id;
    const querySql = `SELECT * FROM payments WHERE id_user = ${id}`;
    getPay(res, querySql);
  };
  
  exports.updatePay = (req, res) => {
    const data = { ...req.body };
    const querySearch = "SELECT * FROM payments WHERE id_payment = ?";
    const queryUpdate = "UPDATE payments SET ? WHERE id_payment = ?";
    updatePay(res, querySearch, queryUpdate, req.params.id, data);
  };
  
  exports.createPay = (req, res) => {
    const data = { ...req.body };
    const querySql = "INSERT INTO payments SET ?";
    insertPay(res, querySql, data);
  };
  
  exports.deletePay = (req, res) => {
    const querySearch = "SELECT * FROM payments WHERE id_payment = ?";
    const queryDelete = "DELETE FROM payments WHERE id_payment = ?";
    deletePay(res, querySearch, queryDelete, parseInt(req.params.id));
  };
  