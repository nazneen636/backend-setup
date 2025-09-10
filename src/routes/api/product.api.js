const express = require("express");
const _ = express.Router();
const productController = require("../../controller/product.controller");
const { upload } = require("../../middleware/multer.middle");
_.route("/create-product").post(
  upload.fields([{ name: "image", maxCount: 10 }]),
  productController.createProduct
);
module.exports = _;
