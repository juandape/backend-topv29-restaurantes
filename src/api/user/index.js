"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var router = (0, express_1.Router)();
// /api/users -> GET -- se quita los permios por el momento !
router.get('/', user_controller_1.getAllUserHandler);
// /api/users -> POST
router.post('/', user_controller_1.createUserHandler);
// /api/users/:id -> GET
router.get('/:id', user_controller_1.getUserHandler);
// /api/users/:id -> DELETE
router.delete('/:id', user_controller_1.deleteUserHandler);
// /api/users/:id -> PATCH
router.patch('/:id', user_controller_1.updateUserHandler);
exports.default = router;
