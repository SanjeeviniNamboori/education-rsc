import { BaseDAO } from "./../config/BaseDAO";
import { IAccount } from "./../models/interfaces/IAccount";
import { Account } from "./../models/schemas/Account";

export class AccountDAO extends BaseDAO<IAccount> {
    constructor() {
        super(Account);
    }
    save(item: IAccount) {
        item.profile = item.profile._id;
        return super.save(item);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate({
            path: "profile", populate: {
                path: "address"
            }
        }).populate("branch");
    }
    findById(id: string) {
        return super.findById(id).populate("profile").populate("branch");
    }
    student() {
        return super.find({ role: "Student" }, "_id role profile status").populate("profile", "_id name mobile email");
    }
    trainer() {
        return super.find({ role: "Trainer" }, "_id role profile status").populate("profile", "_id name mobile email");
    }
    branchStudent(id: string) {
        return super.find({ role: "Student", branch: id }, "_id role profile status").populate("profile", "_id name email mobile")
    }
    branchTrainer(id: string) {
        return super.find({ role: "Trainer", branch: id }, "_id role profile status").populate("profile", "_id name email mobile")
    }
}

Object.seal(AccountDAO);
