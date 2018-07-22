"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BatchForumCommentSchema {
    static get schema() {
        var schema = mongoose.Schema({
            comment: {
                type: String,
                required: true
            },
            updatedBy: {
                type: String,
                required: true
            },
            updatedDate: {
                type: Date,
                default: new Date()
            },
            batchForum: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'BatchForum',
                required: true,
            },
            status: {
                type: Boolean,
                default: true
            }
        });
        return schema;
    }
}
const BatchForumComment = mongooseConnection.model("BatchForumComment", BatchForumCommentSchema.schema);
exports.BatchForumComment = BatchForumComment;
//# sourceMappingURL=BatchForumComment.js.map