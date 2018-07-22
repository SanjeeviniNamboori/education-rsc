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
const BatchMemberService_1 = require("../../services/BatchMemberService");
class BatchMemberController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            let reqData = request.body.data;
            const bmService = new BatchMemberService_1.BatchMemberService();
            const result = bmService.retrieve(reqData);
            App_1.App.Send(request, response, result);
        }));
        this.router.put("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const item = request.body.data;
            const bmService = new BatchMemberService_1.BatchMemberService();
            let result = bmService.save(item.members, item.batch._id);
            App_1.App.Send(request, response, result);
        }));
        this.router.delete("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const item = request.params.id;
            const bmService = new BatchMemberService_1.BatchMemberService();
            let result = bmService.delete(item);
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.BatchMemberController = BatchMemberController;
//# sourceMappingURL=BatchMemberController.js.map