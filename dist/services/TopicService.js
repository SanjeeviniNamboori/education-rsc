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
const TopicDAO_1 = require("../dao/TopicDAO");
class TopicService {
    constructor() {
        this.topicDao = new TopicDAO_1.TopicDAO();
    }
    retrieve(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.topicDao.retrieve(query);
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
                let data = yield this.topicDao.findById(id);
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
                let obj = yield this.topicDao.retrieve({ name: item.name, type: item.type });
                console.log(obj);
                if ((item._id == null && obj.length > 0)) {
                    return Promise.reject({ message: 'Topic already exists.' });
                }
                else if ((item._id != null && obj[0])) {
                    if (item._id != obj[0]._id) {
                        return Promise.reject({ message: 'Topic already exists.' });
                    }
                    else {
                        let topicData = yield this.topicDao.save(item);
                        let returnData = {
                            topicId: topicData._id,
                            message: "Saved Successfully"
                        };
                        return Promise.resolve(returnData);
                    }
                }
                else {
                    let topicData = yield this.topicDao.save(item);
                    let returnData = {
                        topicId: topicData._id,
                        message: "Saved Successfully"
                    };
                    return Promise.resolve(returnData);
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.topicDao.findById(id);
                data.status = false;
                console.log(data);
                let result = yield this.topicDao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.TopicService = TopicService;
//# sourceMappingURL=TopicService.js.map