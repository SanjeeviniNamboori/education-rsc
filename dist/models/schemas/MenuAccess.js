"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class MenuAccessSchema {
    static get schema() {
        var schema = mongoose.Schema({
            role: {
                type: String,
                required: true
            },
            menu: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Menu',
                required: true
            },
            status: {
                type: Boolean,
                required: true
            },
        });
        return schema;
    }
}
var MenuAccess = mongooseConnection.model("MenuAccess", MenuAccessSchema.schema);
exports.MenuAccess = MenuAccess;
//# sourceMappingURL=MenuAccess.js.map