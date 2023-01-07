const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const { multer } = require("../middlewares/multerFileHandler");

router.get("/products", productController.getProduct);
router.get("/product/:id", productController.getProductById);
router.post("/product/", multer.single("file"),productController.createProduct);
router.delete("/product/:id", productController.deleteproduct);
router.put("/product/:id", productController.updateProduct);

module.exports = router;
