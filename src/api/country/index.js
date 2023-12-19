"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var country_controller_1 = require("./country.controller");
var auth_controller_1 = require("../../auth/auth.controller");
var router = (0, express_1.Router)();
router.get('/', country_controller_1.getAllCountriesHandler);
router.get('/:id', country_controller_1.getCountryByIdHandler);
router.post('/', auth_controller_1.isAuthenticated, (0, auth_controller_1.hasRole)(['ADMINRESTAURANT']), country_controller_1.createCountryHandler);
router.patch('/:id', auth_controller_1.isAuthenticated, (0, auth_controller_1.hasRole)(['ADMINRESTAURANT']), country_controller_1.updateCountryByIdHandler);
router.delete('/:id', auth_controller_1.isAuthenticated, (0, auth_controller_1.hasRole)(['ADMINRESTAURANT']), country_controller_1.deleteCountryByIdHandler);
exports.default = router;
