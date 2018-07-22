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
const BatchTimingDAO_1 = require("../dao/BatchTimingDAO");
const BatchDAO_1 = require("../dao/BatchDAO");
class BatchTimingService {
    constructor() {
        this.batchTimingDao = new BatchTimingDAO_1.BatchTimingDAO();
        this.batchDao = new BatchDAO_1.BatchDAO();
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.batchTimingDao.retrieve(reqData);
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
                let data = yield this.batchTimingDao.findById(id);
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
                let batchTimingData = yield this.batchTimingDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : batchTimingData._id,
                    message: "Saved Successfully"
                };
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.BatchTimingService = BatchTimingService;
//# sourceMappingURL=BatchTimingService.js.map