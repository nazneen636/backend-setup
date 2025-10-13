const express = require("express");
const _ = express.Router();
const paymentController = require("../../controller/payment.controller");
_.route("/success").post(paymentController.success);
_.route("/fail").post(paymentController.cancel);
_.route("/cancel").post(paymentController.fail);
_.route("/ipn").post(paymentController.ipn);

module.exports = _;
