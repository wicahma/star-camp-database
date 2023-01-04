const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/pays", paymentController.getAllPay);
router.get("/pay/:id", paymentController.getPayByUser);
router.put("/pay/:id", paymentController.updatePay);
router.post("/pay", paymentController.createPay);
router.delete("/pay/:id", paymentController.deletePay);


module.exports = router;
