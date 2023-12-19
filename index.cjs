"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
dotenv.config();
var app_1 = require("./app");
function startServer() {
    var PORT = process.env.PORT || 3030;
    app_1.server.listen(PORT, function () {
        console.info("Server running \uD83E\uDD16\uD83D\uDE80 at http://localhost:".concat(PORT));
    });
}
setImmediate(startServer);
exports.default = app_1.server;
