"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class TopicSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            detail: {
                type: String,
                required: true
            },
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
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
var Topic = mongooseConnection.model("Topic", TopicSchema.schema);
exports.Topic = Topic;
//# sourceMappingURL=Topic.js.map