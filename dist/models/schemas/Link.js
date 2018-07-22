"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class LinkSchema {
    static get schema() {
        var schema = mongoose.Schema({
            topic: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
                required: true,
            },
            detail: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}
var Link = mongooseConnection.model("Link", LinkSchema.schema);
exports.Link = Link;
//# sourceMappingURL=Link.js.map