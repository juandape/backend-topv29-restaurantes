"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var food_controller_1 = require("./food.controller");
//isAuthenticated,hasRole(['ADMINRESTAURANT'])  para controlar el back
var router = (0, express_1.Router)();
router.get('/', food_controller_1.getAllFoodsHandler);
router.get('/:id', food_controller_1.getFoodByIdHandler);
router.post('/', food_controller_1.createFoodHandler);
router.patch('/:id', food_controller_1.updateFoodByIdHandler);
router.delete('/:id', food_controller_1.deleteFoodByIdHandler);
exports.default = router;
