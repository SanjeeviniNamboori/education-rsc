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
const BatchCurriculumDAO_1 = require("../dao/BatchCurriculumDAO");
const BatchTimingDAO_1 = require("../dao/BatchTimingDAO");
const TopicDAO_1 = require("../dao/TopicDAO");
class BatchCurriculumService {
    constructor() {
        this._dao = new BatchCurriculumDAO_1.BatchCurriculumDAO();
        this.timedao = new BatchTimingDAO_1.BatchTimingDAO();
        this.topicdao = new TopicDAO_1.TopicDAO();
    }
    retrieve(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._dao.retrieve(query);
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
                let data = yield this._dao.findById(item._id);
                data.topicStatus = item.topicStatus;
                let result = yield this._dao.update(item._id, data);
                return Promise.resolve({
                    "message": "Changed status successfully",
                    "data": result
                });
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.BatchCurriculumService = BatchCurriculumService;
//# sourceMappingURL=BatchCurriculumService.js.map