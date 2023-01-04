const db = require("../configs/db");

exports.getOrder = (res, state) => {
  db.query(state, (err, rows) => {
    if (err) {
      return res.status(404).json({
        message: "Data Order gagal diambil!",
        error: err,
      });
    } else {
      return res.status(200).json({
        message: "Data Order berhasil diambil cuy!",
        data: rows,
      });
    }
  });
};

exports.insertOrder = (res, state, data) => {
  db.query(state, data, (err, rows, field) => {
    console.log(rows);
    if (err) {
      return res.status(400).json({
        message: "gagal insert data Order!",
        data: err,
      });
    } else {
      return res.status(201).json({
        message: "berhasil insert data Order!",
        data: rows,
      });
    }
  });
};

exports.updateOrder = (res, searchState, updateState, id, data) => {
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
            message: "berhasil update data Order!",
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

exports.deleteOrder = (res, searchState, deleteState, id) => {
  // jalankan query untuk melakukan pencarian data
  db.query(searchState, id, (err, rows, field) => {
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      db.query(deleteState, id, (err, rows, field) => {
        // error handling
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        } else {
          res.status(201).json({
            message: "berhasil update data Order!",
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
