"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailSendGrid = exports.sendMailNodeMailer = void 0;
var mail_1 = require("@sendgrid/mail");
function sendMailNodeMailer() { }
exports.sendMailNodeMailer = sendMailNodeMailer;
function sendMailSendGrid(data) {
    var apiKey = process.env.SENDGRID_API_KEY;
    mail_1.default.setApiKey(apiKey);
    return mail_1.default.send(data);
}
exports.sendMailSendGrid = sendMailSendGrid;
