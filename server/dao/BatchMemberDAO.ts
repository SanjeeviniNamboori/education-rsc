import { BaseDAO } from "./../config/BaseDAO";
import { IBatchMember } from "./../models/interfaces/IBatchMember";
import { BatchMember } from "./../models/schemas/BatchMember";

export class BatchMemberDAO extends BaseDAO<IBatchMember> {
    constructor() {
        super(BatchMember);
    }
    save(item: IBatchMember) {
        item.account = item.account._id;
        item.batch = item.batch._id;
        return super.save(item);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate({
            path: "account", populate: {
                path: "profile"
            }
        });
    }
    findById(id: string) {
        return super.findById(id).populate("account");
    }
    batchretrieve(query: object) {
        return super.find(query, "batch").populate({
            path: "batch", populate: {
                path: "course"
            }
        });
    }
}

Object.seal(BatchMemberDAO);
