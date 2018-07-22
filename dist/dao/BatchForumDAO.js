"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchForum_1 = require("./../models/schemas/BatchForum");
class BatchForumDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchForum_1.BatchForum);
    }
    save(item) {
        item.batch = item.batch._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("batch");
    }
    findById(id) {
        return super.findById(id).populate("batch");
    }
}
exports.BatchForumDAO = BatchForumDAO;
Object.seal(BatchForumDAO);
//# sourceMappingURL=BatchForumDAO.js.map