"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class MenuSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true,
                unique: true
            },
            icon: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}
var Menu = mongooseConnection.model("Menu", MenuSchema.schema);
exports.Menu = Menu;
//# sourceMappingURL=Menu.js.map