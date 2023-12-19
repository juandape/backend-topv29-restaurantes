"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = exports.verifyToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var SECRET = process.env.JWT_SECRET;
/**
 * Validates the token
 * @param token JWT token
 * @returns PayloadType | null
 */
function verifyToken(token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, SECRET);
        return decoded;
    }
    catch (error) {
        return null;
    }
}
exports.verifyToken = verifyToken;
/**
 * Generates a token
 * @param payload Payload to be signed
 * @returns string
 */
function signToken(payload) {
    var token = jsonwebtoken_1.default.sign(payload, SECRET);
    return token;
}
exports.signToken = signToken;
