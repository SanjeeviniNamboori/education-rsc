"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class AccountSchema {
    static get schema() {
        var schema = mongoose.Schema({
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            profile: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Profile',
                required: true,
            },
            status: {
                type: Boolean,
                default: true
            },
            branch: {
                type: String,
                ref: 'Branch',
                required: true
            }
        });
        return schema;
    }
}
const Account = mongooseConnection.model("Account", AccountSchema.schema);
exports.Account = Account;
//# sourceMappingURL=Account.js.map