const {
  getPayDetail,
  deletePayDetail,
  updatePayDetail,
  insertPayDetail,
} = require("../models/paymentDetailModel");
const fs = require("fs");
const {
  authenticateGoogle,
  uploadToGoogleDrive,
} = require("../services/googleDriveServices");

exports.getAllPayDetail = (req, res) => {
  const querySql = "SELECT * FROM paymentdetails";
  getPayDetail(res, querySql);
};

exports.getPayDetailByIdPay = (req, res) => {
  const id = req.params.id;
  const querySql = `SELECT * FROM paymentdetails WHERE id_payment_detail = ${id}`;
  getPayDetail(res, querySql);
};

exports.getPayDetailByIdOrder = (req, res) => {
  const id = req.params.id;
  const querySql = `SELECT * FROM paymentdetails INNER JOIN payments ON paymentdetails.id_payment_detail=payments.id_payment_detail WHERE id_order = ${id}`;
  getPayDetail(res, querySql);
};

exports.createPayDetail = (req, res) => {
  const data = { ...req.body };
  const querySql = "INSERT INTO paymentdetails SET ?";
  insertPayDetail(res, querySql, data);
};

exports.deletePayDetail = (req, res) => {
  const querySearch = "SELECT * FROM paymentdetails WHERE id_Pay_detail = ?";
  const queryDelete = "DELETE FROM paymentdetails WHERE id_Pay_detail = ?";
  deletePayDetail(res, querySearch, queryDelete, parseInt(req.params.id));
};

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};

exports.uploadFile = async (req, res, next) => {
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const auth = authenticateGoogle();
    const response = await uploadToGoogleDrive(req.file, auth);
    deleteFile(req.file.path);
    res.status(200).json({ response });
  } catch (err) {
    console.log(err);
  }
};
