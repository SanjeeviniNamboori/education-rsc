"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Account_1 = require("./../models/schemas/Account");
class AccountDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Account_1.Account);
    }
    save(item) {
        item.profile = item.profile._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate({
            path: "profile", populate: {
                path: "address"
            }
        }).populate("branch");
    }
    findById(id) {
        return super.findById(id).populate("profile").populate("branch");
    }
    student() {
        return super.find({ role: "Student" }, "_id role profile status").populate("profile", "_id name mobile email");
    }
    trainer() {
        return super.find({ role: "Trainer" }, "_id role profile status").populate("profile", "_id name mobile email");
    }
    branchStudent(id) {
        return super.find({ role: "Student", branch: id }, "_id role profile status").populate("profile", "_id name email mobile");
    }
    branchTrainer(id) {
        return super.find({ role: "Trainer", branch: id }, "_id role profile status").populate("profile", "_id name email mobile");
    }
}
exports.AccountDAO = AccountDAO;
Object.seal(AccountDAO);
//# sourceMappingURL=AccountDAO.js.map