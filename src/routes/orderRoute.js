const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/orders", orderController.getAllOrder);
router.get("/order/pembayaran", orderController.getOrderPembayaran);
router.get("/order/pembatalan", orderController.getOrderPembatalan);
router.get("/order/:id", orderController.getOrderByUser);
router.put("/order/:id", orderController.updateOrder);
router.post("/order", orderController.createOrder);
router.delete("/order/:id", orderController.deleteOrder);


module.exports = router;
