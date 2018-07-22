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
const AttendanceService_1 = require("../../services/AttendanceService");
class AttendanceController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            let reqData = request.body.data;
            const attendanceService = new AttendanceService_1.AttendanceService();
            const result = attendanceService.retrieve(reqData.data);
            App_1.App.Send(request, response, result);
        }));
        this.router.get("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const attendanceService = new AttendanceService_1.AttendanceService();
            const result = attendanceService.entity(id);
            App_1.App.Send(request, response, result);
        }));
        this.router.put("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const item = request.body.data;
            const attendanceService = new AttendanceService_1.AttendanceService();
            let result = attendanceService.save(item);
            App_1.App.Send(request, response, result);
        }));
        this.router.delete("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const attendanceService = new AttendanceService_1.AttendanceService();
            const result = attendanceService.delete(id);
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=AttendanceController.js.map