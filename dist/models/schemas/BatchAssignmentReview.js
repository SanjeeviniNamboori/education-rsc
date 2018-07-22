"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BatchAssignmentReviewSchema {
    static get schema() {
        var schema = mongoose.Schema({
            batchStudentAssignmentId: {
                type: String,
                required: true
            },
            questionId: {
                type: String,
                required: true
            },
            YourAns: {
                type: String,
                required: true
            },
            isRightAns: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}
var BatchAssignmentReview = mongooseConnection.model("BatchAssignmentReview", BatchAssignmentReview.schema);
exports.BatchAssignmentReview = BatchAssignmentReview;
//# sourceMappingURL=BatchAssignmentReview.js.map