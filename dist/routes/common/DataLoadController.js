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
const DataLoadService_1 = require("../../services/common/DataLoadService");
class DataLoadController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.get("/:category", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const category = request.params.category;
            const service = new DataLoadService_1.DataLoadService();
            let result = null;
            switch (category) {
                case 'codes':
                    result = service.codes();
                    break;
                case 'roles':
                    result = service.roles();
                    break;
                case 'branches':
                    result = service.branchList();
                    break;
                case 'batchtypes':
                    result = service.batchTypes();
                    break;
                case 'linktypes':
                    result = service.linkTypes();
                    break;
                case 'studentlist':
                    result = service.studentList();
                    break;
                case 'trainerlist':
                    result = service.trainerList();
                    break;
                case 'timings':
                    result = service.timings();
                    break;
                case 'courselist':
                    result = service.courseList();
                    break;
                case 'topicstatus':
                    result = service.topicStatus();
                    break;
                case 'tracker':
                    result = service.tracker();
                    break;
                case 'default': result = null;
            }
            App_1.App.Send(request, response, result);
        }));
        this.router.get("/:category/:branch", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const category = request.params.category;
            const branch = request.params.branch;
            const service = new DataLoadService_1.DataLoadService();
            let result = null;
            switch (category) {
                case 'studentlist':
                    result = service.branchStudentlist(branch);
                    break;
                case 'trainerlist':
                    result = service.branchTrainerlist(branch);
                    break;
                case 'default': result = null;
            }
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.DataLoadController = DataLoadController;
//# sourceMappingURL=DataLoadController.js.map