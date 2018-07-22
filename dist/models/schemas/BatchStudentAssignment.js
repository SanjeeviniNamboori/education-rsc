"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BatchStudentAssignmentSchema {
    static get schema() {
        var schema = mongoose.Schema({
            batchAssignmentId: {
                type: String,
                required: false
            },
            userId: {
                type: String,
                required: true
            },
            marks: {
                type: Number,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            },
            txnDate: {
                type: Date,
                required: true
            }
        });
        return schema;
    }
}
var BatchStudentAssignment = mongooseConnection.model("BatchStudentAssignment", BatchStudentAssignmentSchema.schema);
exports.BatchStudentAssignment = BatchStudentAssignment;
//# sourceMappingURL=BatchStudentAssignment.js.map