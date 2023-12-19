"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ubication_controller_1 = require("./ubication.controller");
var router = (0, express_1.Router)();
router.get('/', ubication_controller_1.getAllUbicationsHandler);
router.get('/:id', ubication_controller_1.getUbicationByIdHandler);
router.post('/', ubication_controller_1.createUbicationHandler);
router.patch('/:id', ubication_controller_1.updateUbicationByIdHandler);
router.delete('/:id', ubication_controller_1.deleteUbicationByIdHandler);
exports.default = router;
