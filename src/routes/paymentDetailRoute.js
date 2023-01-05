const express = require("express");
const router = express.Router();
const paymentDetailController = require("../controllers/paymentDetailController");
const { multer } = require("../middlewares/multerFileHandler");

router.get("/pay-details", paymentDetailController.getAllPayDetail);
router.get("/pay-detail/:id", paymentDetailController.getPayDetailByIdPay);
router.get("/pay-detail/order/:id", paymentDetailController.getPayDetailByIdOrder);
router.post("/pay-detail", paymentDetailController.createPayDetail);
router.delete("/pay-detail/:id", paymentDetailController.deletePayDetail);
router.post("/pay-detail-img", multer.single("file"),paymentDetailController.uploadFile);


module.exports = router;