const {
  getAllProduct,
  deleteProduct,
  updateProduct,
  insertProduct,
} = require("../models/productModel");
const fs = require("fs");
const {
  authenticateGoogle,
  uploadToGoogleDrive,
} = require("../services/googleDriveServices");

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

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};

exports.createProduct = async (req, res) => {
  const data = { ...req.body };
  let product = JSON.parse(data.product);
  try {
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }
    const auth = authenticateGoogle();
    const response = await uploadToGoogleDrive(req.file, auth);
    product.image = response.data.id;
    deleteFile(req.file.path);
  } catch (err) {
    console.log(err);
  }
  const querySql = "INSERT INTO products SET ?";
  insertProduct(res, querySql, product);
};

exports.deleteproduct = (req, res) => {
  const querySearch = "SELECT * FROM products WHERE id_product = ?";
  const queryDelete = "DELETE FROM products WHERE id_product = ?";
  deleteProduct(res, querySearch, queryDelete, parseInt(req.params.id));
};
