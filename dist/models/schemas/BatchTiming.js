"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BatchTimingSchema {
    static get schema() {
        var schema = mongoose.Schema({
            inTime: {
                type: Date,
                required: true
            },
            outTime: {
                type: Date,
                required: true
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
var BatchTiming = mongooseConnection.model("BatchTiming", BatchTimingSchema.schema);
exports.BatchTiming = BatchTiming;
//# sourceMappingURL=BatchTiming.js.map