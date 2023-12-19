"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var restaurant_controller_1 = require("./restaurant.controller");
//import { hasRole, isAuthenticated } from '../../auth/auth.controller'; colocar persimos ,isAuthenticated,hasRole(['ADMIN'])
var router = (0, express_1.Router)();
router.get('/', restaurant_controller_1.getAllRestaurantsHandler);
router.get('/:id', restaurant_controller_1.getRestaurantByIdHandler);
router.post('/', restaurant_controller_1.createRestaurantHandler);
router.patch('/:id', restaurant_controller_1.updateRestaurantByIdHandler);
router.delete('/:id', restaurant_controller_1.deleteRestaurantByIdHandler);
exports.default = router;
