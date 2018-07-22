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
const MenuDAO_1 = require("../dao/MenuDAO");
class MenuService {
    constructor() {
        this._menuDao = new MenuDAO_1.MenuDAO();
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._menuDao.retrieve(reqData);
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
                let data = yield this._menuDao.findById(id);
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
                let menuData = yield this._menuDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : menuData._id,
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
                let result = yield this._menuDao.delete(id);
                return Promise.resolve({ message: "Menu Deleted" });
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.MenuService = MenuService;
//# sourceMappingURL=MenuService.js.map