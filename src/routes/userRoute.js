const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.getAllUser);
router.get("/user/:email&:password", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.post("/user/", userController.createUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
