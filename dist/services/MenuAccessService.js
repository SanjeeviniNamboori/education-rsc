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
const MenuAccessDAO_1 = require("../dao/MenuAccessDAO");
const MenuDAO_1 = require("../dao/MenuDAO");
class MenuAccessService {
    constructor() {
        this._menuAccessDao = new MenuAccessDAO_1.MenuAccessDAO();
        this._menuDao = new MenuDAO_1.MenuDAO();
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._menuAccessDao.retrieve(reqData);
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
                let data = yield this._menuAccessDao.findById(id);
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
                let count = 0;
                for (let i = 0; i < item.menu.length; i++) {
                    let newobj = {
                        "role": item.role,
                        "menu": item.menu[i],
                        "status": item.status
                    };
                    let maCheck = yield this._menuAccessDao.retrieve(newobj);
                    if (maCheck.length == 0) {
                        let menuaccessData = yield this._menuAccessDao.save(newobj);
                        count++;
                    }
                }
                return Promise.resolve({ message: count + " link(s) added to " + item.role });
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._menuAccessDao.findById(id);
                data.status = false;
                console.log(data);
                let result = yield this._menuAccessDao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.MenuAccessService = MenuAccessService;
//# sourceMappingURL=MenuAccessService.js.map