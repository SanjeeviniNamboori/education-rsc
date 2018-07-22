"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class AppDataSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            key: {
                type: String,
                required: true
            },
            code: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                default: true
            }
        });
        return schema;
    }
}
var AppData = mongooseConnection.model("AppData", AppDataSchema.schema);
exports.AppData = AppData;
//# sourceMappingURL=AppData.js.map