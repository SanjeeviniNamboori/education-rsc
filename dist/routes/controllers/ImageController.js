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
const ImageService_1 = require("../../services/ImageService");
class ImageController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
        this.router.get("/:id", (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = request.params.id;
            const imageService = new ImageService_1.ImageService();
            const result = imageService.entity(id);
            App_1.App.Send(request, response, result);
        }));
        return this.router;
    }
}
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map