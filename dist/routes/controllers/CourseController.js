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
const CourseService_1 = require("../../services/CourseService");
class CourseController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.post("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const courseService = new CourseService_1.CourseService();
            const result = courseService.retrieve();
            App_1.App.Send(request, response, result);
        }));
        this.router.put("/", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const item = request.body.data;
            const courseService = new CourseService_1.CourseService();
            let result = courseService.save(item);
            App_1.App.Send(request, response, result);
        }));
        this.router.get("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const courseService = new CourseService_1.CourseService();
            let result = courseService.entity(id);
            App_1.App.Send(request, response, result);
        }));
        this.router.delete("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const courseService = new CourseService_1.CourseService();
            let result = courseService.delete(id);
            App_1.App.Send(request, response, result);
        }));
        this.router.post("/user", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const reqdata = request.body.data;
            const courseService = new CourseService_1.CourseService();
            let result = courseService.userSpecific(reqdata);
            App_1.App.Send(request, response, result);
        }));
        this.router.post("/batch", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const reqdata = request.body.data;
            const courseService = new CourseService_1.CourseService();
            let result = courseService.batch(reqdata);
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.CourseController = CourseController;
//# sourceMappingURL=CourseController.js.map