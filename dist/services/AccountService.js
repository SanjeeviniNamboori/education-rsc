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
const AccountDAO_1 = require("../dao/AccountDAO");
const ProfileDAO_1 = require("../dao/ProfileDAO");
const ProfileReportDAO_1 = require("../dao/ProfileReportDAO");
const AddressDAO_1 = require("../dao/AddressDAO");
class AccountService {
    constructor() {
        this.accountDao = new AccountDAO_1.AccountDAO();
        this.profileDAO = new ProfileDAO_1.ProfileDAO();
        this.profileReportDao = new ProfileReportDAO_1.ProfileReportDAO();
        this.addressDao = new AddressDAO_1.AddressDAO();
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.accountDao.findById(id);
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
                let data = yield this.accountDao.retrieve(reqData);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    saveEntity(item, isNew) {
        return __awaiter(this, void 0, void 0, function* () {
            let addressData = yield this.addressDao.save(item.profile);
            item.profile.address = addressData._id;
            let profileData = yield this.profileDAO.save(item.profile);
            item.profile._id = item.profile._id ? item.profile._id : profileData._id;
            let accountData = yield this.accountDao.save(item);
            let returnData = {
                _id: item._id ? item._id : accountData._id,
                message: "Updated Successfully"
            };
            if (isNew) {
                let profileReport = {
                    joinDate: Date.now(),
                    updatedBy: profileData.name,
                    account: accountData._id,
                    updatedDate: Date.now()
                };
                let profileReportData = yield this.profileReportDao.save(profileReport);
                returnData = {
                    _id: item._id ? item._id : accountData._id,
                    message: "Saved Successfully"
                };
            }
            return returnData;
        });
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let obj = yield this.profileDAO.retrieve({ email: item.profile.email });
                if (item._id != null && obj.length > 0) {
                    return Promise.resolve(this.saveEntity(item, false));
                }
                else if (item._id == null && obj.length > 0) {
                    return Promise.reject({ message: 'Email already exists' });
                }
                else {
                    item.branch = "DigitalLync";
                    return Promise.resolve(this.saveEntity(item, true));
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
                let data = (yield this.accountDao.findById(id));
                data.status = false;
                console.log(data);
                let result = yield this.accountDao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=AccountService.js.map