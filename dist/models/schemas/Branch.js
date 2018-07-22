"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class BranchSchema {
    static get schema() {
        var schema = mongoose.Schema({
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            loc: {
                type: String,
                required: true
            },
            address: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Address',
                required: true,
            }
        });
        return schema;
    }
}
const Branch = mongooseConnection.model("Branch", BranchSchema.schema);
exports.Branch = Branch;
//# sourceMappingURL=Branch.js.map