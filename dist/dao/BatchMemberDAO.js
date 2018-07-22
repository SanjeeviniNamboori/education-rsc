"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchMember_1 = require("./../models/schemas/BatchMember");
class BatchMemberDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchMember_1.BatchMember);
    }
    save(item) {
        item.account = item.account._id;
        item.batch = item.batch._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate({
            path: "account", populate: {
                path: "profile"
            }
        });
    }
    findById(id) {
        return super.findById(id).populate("account");
    }
    batchretrieve(query) {
        return super.find(query, "batch").populate({
            path: "batch", populate: {
                path: "course"
            }
        });
    }
}
exports.BatchMemberDAO = BatchMemberDAO;
Object.seal(BatchMemberDAO);
//# sourceMappingURL=BatchMemberDAO.js.map