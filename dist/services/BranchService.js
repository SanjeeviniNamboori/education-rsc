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
const BranchDAO_1 = require("../dao/BranchDAO");
const AddressDAO_1 = require("../dao/AddressDAO");
class BranchService {
    constructor() {
        this.branchDao = new BranchDAO_1.BranchDAO();
        this.addressDao = new AddressDAO_1.AddressDAO();
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.branchDao.findById(id);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.branchDao.retrieve(reqData);
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
                let obj = yield this.branchDao.retrieve({ name: item.name });
                if (item._id != null && obj.length > 0) {
                    let addressData = yield this.addressDao.save(item.address);
                    item.address._id = item.address._id ? item.address._id : addressData._id;
                    let branchData = yield this.branchDao.save(item);
                    let returnData = {
                        _id: item._id ? item._id : branchData._id,
                        message: "Updated Successfully"
                    };
                    return Promise.resolve(returnData);
                }
                else if (item._id == null && obj.length > 0) {
                    return Promise.reject({ message: 'Branch already exists' });
                }
                else {
                    let addressData = yield this.addressDao.save(item.address);
                    item.address._id = item.address._id ? item.address._id : addressData._id;
                    let branchData = yield this.branchDao.save(item);
                    let returnData = {
                        _id: item._id ? item._id : branchData._id,
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
}
exports.BranchService = BranchService;
//# sourceMappingURL=BranchService.js.map