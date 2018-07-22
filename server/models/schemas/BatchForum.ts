import { DataAccess } from "./../../config/DataAccess";
import { IBatchForum } from "./../interfaces/IBatchForum";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchForumSchema {

    static get schema() {
        var schema = mongoose.Schema({
            query: {
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
            batch: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Batch',
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
const BatchForum = mongooseConnection.model<IBatchForum>("BatchForum", BatchForumSchema.schema);
export { BatchForum };
