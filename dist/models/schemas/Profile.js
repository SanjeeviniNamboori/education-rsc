"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class ProfileSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
            },
            email: {
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
var Profile = mongooseConnection.model("Profile", ProfileSchema.schema);
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map