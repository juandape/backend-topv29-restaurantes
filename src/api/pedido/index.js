"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var pedido_controller_1 = require("./pedido.controller");
var router = (0, express_1.Router)();
router.get('/', pedido_controller_1.getAllPedidosHandler);
router.get('/:id', pedido_controller_1.getPedidoByIdHandler);
router.post('/', pedido_controller_1.createPedidoHandler);
router.patch('/:id', pedido_controller_1.updatePedidoByIdHandler);
router.delete('/:id', pedido_controller_1.deletePedidoByIdHandler);
exports.default = router;