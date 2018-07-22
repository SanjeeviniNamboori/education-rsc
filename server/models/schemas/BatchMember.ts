import { DataAccess } from "./../../config/DataAccess";
import { IBatchMember } from "./../interfaces/IBatchMember";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchMemberSchema {
    static get schema() {
        var schema = mongoose.Schema({
            account: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true,
            },
            batch: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Batch',
                required: true,
            }
        });
        return schema;
    }
}

var BatchMember = mongooseConnection.model<IBatchMember>("BatchMember", BatchMemberSchema.schema);
export { BatchMember };
