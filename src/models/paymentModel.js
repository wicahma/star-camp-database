const db = require("../configs/db");

exports.getPay = (res, state) => {
  db.query(state, (err, rows) => {
    if (err) {
      return res.status(404).json({
        message: "Data Pay gagal diambil!",
        error: err,
      });
    } else {
      return res.status(200).json({
        message: "Data Pay berhasil diambil cuy!",
        data: rows,
      });
    }
  });
};

exports.insertPay = (res, state, data) => {
  db.query(state, data, (err, rows, field) => {
    console.log(rows);
    if (err) {
      return res.status(400).json({
        message: "gagal insert data Pay!",
        data: err,
      });
    } else {
      return res.status(201).json({
        message: "berhasil insert data Pay!",
        data: rows,
      });
    }
  });
};

exports.updatePay = (res, searchState, updateState, id, data) => {
  db.query(searchState, id, (err, rows, field) => {
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }
    if (rows.length) {
      db.query(updateState, [data, id], (err, rows, field) => {
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        } else {
          res.status(201).json({
            message: "berhasil update data Pay!",
            data: rows,
          });
        }
      });
    } else {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};

exports.deletePay = (res, searchState, deleteState, id) => {
  db.query(searchState, id, (err, rows, field) => {
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    if (rows.length) {
      db.query(deleteState, id, (err, rows, field) => {
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        } else {
          res.status(201).json({
            message: "berhasil update data Pay!",
            data: rows,
          });
        }
      });
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Data tidak ditemukan!" });
    }
  });
};
