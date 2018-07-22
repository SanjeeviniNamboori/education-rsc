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
const ProfileReportDAO_1 = require("../dao/ProfileReportDAO");
class ProfileReportService {
    constructor() {
        this._dao = new ProfileReportDAO_1.ProfileReportDAO();
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
    //
    // async entity(id: string) {
    //     try {
    //         let data: any = await this._dao.findById(id);
    //         return Promise.resolve(data);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let newitem = {};
                newitem.leaveDate = new Date();
                newitem.account = item.account;
                newitem.updatedBy = item.name;
                newitem.updatedDate = new Date();
                console.log(newitem);
                let data = yield this._dao.update(item._id, newitem);
                let returnData = {
                    message: "Updated Successfully"
                };
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.ProfileReportService = ProfileReportService;
//# sourceMappingURL=ProfileReportService.js.map