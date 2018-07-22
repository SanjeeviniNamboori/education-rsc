"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BatchAssignmentSchema {
    static get schema() {
        var schema = mongoose.Schema({
            detail: {
                type: String,
                required: false
            },
            batchId: {
                type: String,
                required: true
            },
            txnDate: {
                type: Date,
                required: true
            },
            passMarks: {
                type: Number,
                required: true
            },
            topicId: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            }
        });
        return schema;
    }
}
var BatchAssignment = mongooseConnection.model("BatchAssignment", BatchAssignmentSchema.schema);
exports.BatchAssignment = BatchAssignment;
//# sourceMappingURL=BatchAssignment.js.map