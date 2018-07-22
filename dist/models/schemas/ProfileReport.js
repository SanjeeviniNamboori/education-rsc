"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class ProfileReportSchema {
    static get schema() {
        var schema = mongoose.Schema({
            joinDate: {
                type: Date,
                required: true
            },
            leaveDate: {
                type: Date,
                required: false
            },
            account: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true
            },
            updatedBy: {
                type: String,
                required: true
            },
            updatedDate: {
                type: Date, default: Date.now
            }
        });
        return schema;
    }
}
const ProfileReport = mongooseConnection.model("ProfileReport", ProfileReportSchema.schema);
exports.ProfileReport = ProfileReport;
//# sourceMappingURL=ProfileReport.js.map