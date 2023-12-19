"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var payment_controller_1 = require("./payment.controller");
var router = (0, express_1.Router)();
router.post('/', payment_controller_1.handlerPayment);
exports.default = router;
