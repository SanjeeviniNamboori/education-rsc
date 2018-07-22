"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const App_1 = require("../../utils/App");
const AccountService_1 = require("../../services/AccountService");
class AccountController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            let reqData = request.body;
            const accountService = new AccountService_1.AccountService();
            const result = accountService.retrieve(reqData.data);
            App_1.App.Send(request, response, result);
        }));
        this.router.put("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            console.log(request.body);
            const item = request.body.data;
            const accountService = new AccountService_1.AccountService();
            let result = accountService.save(item);
            App_1.App.Send(request, response, result);
        }));
        this.router.get("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const accountService = new AccountService_1.AccountService();
            const result = accountService.entity(id);
            App_1.App.Send(request, response, result);
        }));
        this.router.delete("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const accountService = new AccountService_1.AccountService();
            const result = accountService.delete(id);
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.AccountController = AccountController;
//# sourceMappingURL=AccountController.js.map