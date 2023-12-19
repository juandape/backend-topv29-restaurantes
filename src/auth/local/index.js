"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var local_controller_1 = require("./local.controller");
var router = (0, express_1.Router)();
// login -> POST -> /auth/local/login http://localhost:3030/auth/local/login
router.post('/login', local_controller_1.loginHandler);
// change password
// reset password
// activate account -> /auth/local/activate/:token
router.get('/activate/:token', local_controller_1.activateHandler);
// logout
exports.default = router;
