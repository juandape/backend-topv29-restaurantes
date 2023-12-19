"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUbicationByIdHandler = exports.updateUbicationByIdHandler = exports.createUbicationHandler = exports.getUbicationByIdHandler = exports.getAllUbicationsHandler = void 0;
var ubication_service_1 = require("./ubication.service");
function getAllUbicationsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, ubication_service_1.getAllUbications)()];
                case 1:
                    posts = _a.sent();
                    return [2 /*return*/, res.json(posts)];
            }
        });
    });
}
exports.getAllUbicationsHandler = getAllUbicationsHandler;
function getUbicationByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, post, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ubication_service_1.getUbicationById)(id)];
                case 2:
                    post = _a.sent();
                    if (!post) {
                        return [2 /*return*/, res.status(404).json({ message: 'Ubication not found' })];
                    }
                    return [2 /*return*/, res.json(post)];
                case 3:
                    error_1 = _a.sent();
                    return [2 /*return*/, next(error_1)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getUbicationByIdHandler = getUbicationByIdHandler;
function createUbicationHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var data, review, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ubication_service_1.createUbication)(data)];
                case 2:
                    review = _a.sent();
                    return [2 /*return*/, res.json(review)];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, next(error_2)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createUbicationHandler = createUbicationHandler;
function updateUbicationByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, data, post, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    data = req.body;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ubication_service_1.updateUbicationById)(id, data)];
                case 2:
                    post = _a.sent();
                    return [2 /*return*/, res.json(post)];
                case 3:
                    error_3 = _a.sent();
                    return [2 /*return*/, next(error_3)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateUbicationByIdHandler = updateUbicationByIdHandler;
function deleteUbicationByIdHandler(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var id, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ubication_service_1.deleteUbicationById)(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.sendStatus(200)];
                case 3:
                    error_4 = _a.sent();
                    return [2 /*return*/, next(error_4)];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.deleteUbicationByIdHandler = deleteUbicationByIdHandler;
