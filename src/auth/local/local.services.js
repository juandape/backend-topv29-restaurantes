"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthResponse = void 0;
var auth_service_1 = require("../auth.service");
function createAuthResponse(input) {
    try {
        var payload = {
            id: input.id,
            email: input.email,
        };
        var token = (0, auth_service_1.signToken)(payload);
        var user = input;
        var profile = {
            id: user.id,
            fullName: "".concat(user.firstName, " ").concat(user.lastName),
            avatar: user.avatar,
            //se queda pensando
            roles: user.roles.map(function (_a) {
                var role = _a.role;
                return ({
                    id: role.id,
                    name: role.name,
                });
            }),
        };
        return ({ token: token, profile: profile });
    }
    catch (error) {
        console.log(error);
    }
}
exports.createAuthResponse = createAuthResponse;
