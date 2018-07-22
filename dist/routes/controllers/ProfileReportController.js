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
const ProfileReportService_1 = require("../../services/ProfileReportService");
class ProfileReportController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            let reqData = request.body;
            const profileReportService = new ProfileReportService_1.ProfileReportService();
            const result = profileReportService.retrieve(reqData.data);
            App_1.App.Send(request, response, result);
        }));
        this.router.put("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const item = request.body.data;
            const profileReportService = new ProfileReportService_1.ProfileReportService();
            let result = profileReportService.update(item);
            App_1.App.Send(request, response, result);
        }));
        // this.router.get("/:id",async(request: Request,response:Response)=>{
        //     const id:any=request.params.id;
        //     const profileReportService=new ProfileReportService();
        //     const result = profileReportService.entity(id);
        //     App.Send(request, response, result);
        // });
        return this.router;
    }
}
exports.ProfileReportController = ProfileReportController;
//# sourceMappingURL=ProfileReportController.js.map