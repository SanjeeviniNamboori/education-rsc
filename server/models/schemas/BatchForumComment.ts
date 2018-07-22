import { DataAccess } from "./../../config/DataAccess";
import { IBatchForumComment } from "./../interfaces/IBatchForumComment";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

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
const BatchForumComment = mongooseConnection.model<IBatchForumComment>("BatchForumComment", BatchForumCommentSchema.schema);
export { BatchForumComment };
