"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = require("express");
var http_1 = require("http");
var express_2 = require("./src/config/express");
var routes_1 = require("./src/routes");
// setup server
var app = (0, express_1.default)();
exports.server = (0, http_1.createServer)(app);
// setup express
(0, express_2.default)(app);
// routes
(0, routes_1.default)(app);
exports.default = app;
