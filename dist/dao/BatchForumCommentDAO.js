"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchForumComment_1 = require("./../models/schemas/BatchForumComment");
class BatchForumCommentDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchForumComment_1.BatchForumComment);
    }
    save(item) {
        item.batchForum = item.batchForum._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("batchForum");
    }
    findById(id) {
        return super.findById(id).populate("batchForum");
    }
}
exports.BatchForumCommentDAO = BatchForumCommentDAO;
Object.seal(BatchForumCommentDAO);
//# sourceMappingURL=BatchForumCommentDAO.js.map