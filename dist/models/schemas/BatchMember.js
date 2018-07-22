"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
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
var BatchMember = mongooseConnection.model("BatchMember", BatchMemberSchema.schema);
exports.BatchMember = BatchMember;
//# sourceMappingURL=BatchMember.js.map