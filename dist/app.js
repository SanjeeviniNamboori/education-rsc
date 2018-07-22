"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
process.env.NODE_ENV = "testing";
const app = express();
app.use(body_parser_1.json());
// app.use(urlencoded({
//     extended: true
// }));
var parsePost = function (req, callback) {
    var data = '';
    req.on('data', function (chunk) {
        data += chunk;
    });
    req.on('end', function () {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
};
app.all('*', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');
    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function (data) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    }
    else {
        next();
    }
});
app.get("/", (request, response) => {
    response.json({
        name: "Express Application"
    });
});
app.use((err, request, response, next) => {
    response.status(err.status || 500);
    response.json({
        error: "Server error"
    });
});
var appRestRouter = express.Router();
const AppController_1 = require("./routes/AppController");
let appController = new AppController_1.AppController();
appController.registerRoutes(appRestRouter);
app.use('/api', appRestRouter);
//var apiDocRouter  = express.Router();
const ApiDocs_1 = require("./swagger/ApiDocs");
let apiDocs = new ApiDocs_1.APIDocs();
app.use('/swagger', apiDocs.getRouter());
const server = app.listen(3003);
exports.server = server;
//# sourceMappingURL=app.js.map