const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/products", productController.getProduct);
router.get("/product/:id", productController.getProductById);
router.post("/product/", productController.createProduct);
router.delete("/product/:id", productController.deleteproduct);
router.put("/product/:id", productController.updateProduct);

module.exports = router;
