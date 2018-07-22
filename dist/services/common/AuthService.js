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
const AccountDAO_1 = require("../../dao/AccountDAO");
const ProfileDAO_1 = require("../../dao/ProfileDAO");
const MenuAccessDAO_1 = require("../../dao/MenuAccessDAO");
const BranchDAO_1 = require("../../dao/BranchDAO");
const AccountService_1 = require("../AccountService");
class AuthService {
    constructor() {
        this.accountDao = new AccountDAO_1.AccountDAO();
        this.profileDAO = new ProfileDAO_1.ProfileDAO();
        this.menuAccessDAO = new MenuAccessDAO_1.MenuAccessDAO();
        this.accountService = new AccountService_1.AccountService();
        this.branchDAO = new BranchDAO_1.BranchDAO();
        this.providers = {
            email: 'email',
            facebook: 'facebook',
            google: 'google',
            linkedin: 'linkedin'
        };
    }
    ;
    retrieve(reqData) {
        switch (reqData.provider) {
            case 'email': {
                return this.sendEmailResponse(reqData);
            }
            case 'facebook': {
                return this.sendSocailResponse(reqData);
            }
            case 'google': {
                return this.sendSocailResponse(reqData);
            }
            case 'linkedin': {
                return this.sendSocailResponse(reqData);
            }
            default: {
                return this.sendEmailResponse(reqData);
            }
        }
    }
    ;
    signup(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAccount = {};
            newAccount._id = null;
            newAccount.role = "NA";
            newAccount.password = "0";
            newAccount.address = {};
            newAccount.address.country = "India";
            const profile = {};
            profile._id = null;
            profile.email = reqData.email;
            if (reqData.password) {
                newAccount.password = reqData.password;
            }
            if (reqData.name) {
                profile.name = reqData.name;
            }
            else {
                profile.name = reqData.email.substring(0, reqData.email.indexOf('@'));
            }
            newAccount.profile = profile;
            console.log(newAccount);
            try {
                return this.accountService.save(newAccount).then(results => {
                    return this.retrieve({ email: reqData.email, provider: "email" });
                }).catch(error => {
                    return Promise.reject(error);
                });
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    sendEmailResponse(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var responseData = {};
                var profileObj = yield this.profileDAO.retrieve({ email: reqData.email });
                profileObj = profileObj[0];
                if (profileObj != null) {
                    var accountObj = yield this.accountDao.retrieve({ profile: profileObj._id });
                    accountObj = accountObj[0];
                    if (accountObj != null) {
                        responseData.user = {};
                        responseData.user.id = accountObj._id;
                        responseData.user.role = accountObj.role;
                        responseData.user.name = accountObj.profile.name;
                        responseData.user.email = accountObj.profile.email;
                        responseData.user.mobile = accountObj.profile.mobile;
                        var menuAccessObj = yield this.menuAccessDAO.retrieve({ role: accountObj.role });
                        responseData.menuList = [];
                        if (menuAccessObj != null) {
                            menuAccessObj.forEach((element) => {
                                responseData.menuList.push(element.menu);
                            });
                        }
                        var branch = yield this.branchDAO.findById(accountObj.branch);
                        if (branch) {
                            responseData.branch = {};
                            responseData.branch.id = branch._id;
                            responseData.branch.name = branch.name;
                        }
                        else {
                            return Promise.reject({ message: "Error in retreving menu access items " });
                        }
                    }
                    else {
                        return Promise.reject({ message: "Didn't find any account with the provided profile " });
                    }
                }
                else {
                    return Promise.reject({ message: "Didn't find any profile with the provided email " });
                }
                return Promise.resolve(responseData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    ;
    sendSocailResponse(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var responseData = {};
                var profileObj = yield this.profileDAO.retrieve({ email: reqData.email });
                profileObj = profileObj[0];
                if (profileObj != null) {
                    var accountObj = yield this.accountDao.retrieve({ profile: profileObj._id });
                    accountObj = accountObj[0];
                    if (accountObj != null) {
                        responseData.user = {};
                        responseData.user.id = accountObj._id;
                        responseData.user.role = accountObj.role;
                        responseData.user.name = accountObj.profile.name;
                        responseData.user.email = accountObj.profile.email;
                        responseData.user.mobile = accountObj.profile.mobile;
                        var menuAccessObj = yield this.menuAccessDAO.retrieve({ role: accountObj.role });
                        responseData.menuList = [];
                        if (menuAccessObj != null) {
                            menuAccessObj.forEach((element) => {
                                responseData.menuList.push(element.menu);
                            });
                        }
                        var branch = yield this.branchDAO.findById(accountObj.branch);
                        if (branch) {
                            responseData.branch = {};
                            responseData.branch.id = branch._id;
                            responseData.branch.name = branch.name;
                        }
                        else {
                            return Promise.reject({ message: "Error in retreving menu access items " });
                        }
                    }
                    else {
                        return Promise.reject({ message: "Didn't find any account with the provided profile " });
                    }
                }
                else {
                    return this.signup(reqData);
                }
                return Promise.resolve(responseData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    ;
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthService.js.map