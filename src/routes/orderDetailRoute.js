const express = require("express");
const router = express.Router();
const orderDetailController = require("../controllers/orderDetailController");

router.get("/order-details", orderDetailController.getAllOrderDetail);
router.get("/order-detail/:id", orderDetailController.getOrderDetailByIdOrder);
router.post("/order-detail", orderDetailController.createOrderDetail);
router.delete("/order-detail/:id", orderDetailController.deleteOrderDetail);

module.exports = router;