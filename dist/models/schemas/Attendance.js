"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class AttendanceSchema {
    static get schema() {
        var schema = mongoose.Schema({
            fromTime: {
                type: Date,
                required: true
            },
            toTime: {
                type: Date,
                required: true
            },
            updatedBy: {
                type: String,
                required: true
            },
            updatedDate: {
                type: Date,
                required: true
            },
            account: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true
            }
        });
        return schema;
    }
}
var Attendance = mongooseConnection.model("Attendance", AttendanceSchema.schema);
exports.Attendance = Attendance;
//# sourceMappingURL=Attendance.js.map