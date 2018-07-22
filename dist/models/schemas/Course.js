"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class CourseSchema {
    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            img: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Image',
                required: true,
            },
            detail: {
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
var Course = mongooseConnection.model("Course", CourseSchema.schema);
exports.Course = Course;
//# sourceMappingURL=Course.js.map