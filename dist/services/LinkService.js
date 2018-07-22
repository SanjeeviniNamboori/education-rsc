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
const LinkDAO_1 = require("../dao/LinkDAO");
const TopicDAO_1 = require("../dao/TopicDAO");
class LinkService {
    constructor() {
        this.linkDao = new LinkDAO_1.LinkDAO();
        this.topicDao = new TopicDAO_1.TopicDAO();
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.linkDao.retrieve(reqData);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.linkDao.findById(id);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let linkData = yield this.linkDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : linkData._id,
                    message: "Saved Successfully"
                };
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = (yield this.linkDao.delete(id));
                let returnData = {
                    message: "Link Removed Successfully"
                };
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.LinkService = LinkService;
//# sourceMappingURL=LinkService.js.map