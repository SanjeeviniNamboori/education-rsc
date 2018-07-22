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
const AppDataDAO_1 = require("../dao/AppDataDAO");
class AppDataService {
    constructor() {
        this._dao = new AppDataDAO_1.AppDataDAO();
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._dao.retrieve(reqData);
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
                let data = yield this._dao.findById(id);
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
                console.log(item);
                let obj = yield this._dao.retrieve({ code: item.code, key: item.key });
                console.log(obj);
                if (item._id == null && obj.length > 0) {
                    return Promise.reject({ message: 'Code already exists' });
                }
                else {
                    let data = yield this._dao.save(item);
                    return Promise.resolve(data);
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
                let data = yield this._dao.findById(id);
                data.status = false;
                console.log(data);
                let result = yield this._dao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.AppDataService = AppDataService;
//# sourceMappingURL=AppDataService.js.map