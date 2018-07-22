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
const BatchMemberDAO_1 = require("../dao/BatchMemberDAO");
class BatchMemberService {
    constructor() {
        this._dao = new BatchMemberDAO_1.BatchMemberDAO();
    }
    retrieve(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let returnData = {
                    students: [],
                    trainers: []
                };
                let bmData = yield this._dao.retrieve(query);
                bmData.forEach(function (member) {
                    switch (member.account.role) {
                        case 'Student':
                            returnData.students.push(member);
                            break;
                        case 'Trainer':
                            returnData.trainers.push(member);
                            break;
                        default: break;
                    }
                });
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    save(items, batch) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let result = [];
                for (var i = 0; i < items.length; i++) {
                    let bmobj = {
                        account: { _id: items[i] },
                        batch: { _id: batch }
                    };
                    let bm = yield this._dao.save(bmobj);
                    result.push(bm._id);
                }
                console.log(result);
                return Promise.resolve(result);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._dao.delete(item);
                let returnData = {
                    message: "Removed successfully"
                };
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.BatchMemberService = BatchMemberService;
//# sourceMappingURL=BatchMemberService.js.map