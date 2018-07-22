"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
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
const BatchForum = mongooseConnection.model("BatchForum", BatchForumSchema.schema);
exports.BatchForum = BatchForum;
//# sourceMappingURL=BatchForum.js.map