"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = require("./api/city");
var country_1 = require("./api/country");
var location_1 = require("./api/location");
var ubication_1 = require("./api/ubication");
var category_1 = require("./api/category");
var food_1 = require("./api/food");
var detail_1 = require("./api/detail");
var pedido_1 = require("./api/pedido");
var restaurant_1 = require("./api/restaurant");
var user_1 = require("./api/user");
var local_1 = require("./auth/local");
var payment_1 = require("./api/payment");
function routes(app) {
    app.use('/api/users', user_1.default);
    app.use('/api/cities', city_1.default);
    app.use('/api/countries', country_1.default);
    app.use('/api/locations', location_1.default);
    app.use('/api/ubication', ubication_1.default);
    app.use('/api/category', category_1.default);
    app.use('/api/food', food_1.default);
    app.use('/api/detail', detail_1.default);
    app.use('/api/pedido', pedido_1.default);
    app.use('/api/restaurants', restaurant_1.default);
    app.use('/api/payments', payment_1.default);
    //Auth
    app.use('/auth/local', local_1.default);
}
exports.default = routes;
