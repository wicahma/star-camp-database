const {
  getUser,
  deleteUser,
  updateUser,
  insertUser,
} = require("../models/userModel");

exports.getAllUser = (req, res) => {
  const querySql = "SELECT * FROM users";
  getUser(res, querySql);
};

exports.getUser = (req, res) => {
  const email = req.params.email;
  const pass = req.params.password;
  const querySql = `SELECT * FROM users WHERE email="${email}" AND password="${pass}"`;
  getUser(res, querySql);
};

exports.createUser = (req, res) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO users SET ?";

  // masukkan ke dalam model
  insertUser(res, querySql, data);
};

exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const data = { ...req.body };
  const querySearch = "SELECT * FROM users WHERE id_user = ?";
  const queryUpdate = "UPDATE users SET ? WHERE id_user = ?";

  updateUser(res, querySearch, queryUpdate, id, data);
};

exports.deleteUser = (req, res) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM users WHERE id_user = ?";
  const queryDelete =
    "DELETE FROM `users` WHERE `id_user` = ?";

  // masukkan ke dalam model
  deleteUser(res, querySearch, queryDelete, parseInt(req.params.id));
};
