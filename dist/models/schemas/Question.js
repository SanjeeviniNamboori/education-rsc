"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class QuestionSchema {
    static get schema() {
        var schema = mongoose.Schema({
            courseId: {
                type: String,
                required: true
            },
            topicId: {
                type: String,
                required: true
            },
            detail: {
                type: String,
                required: true
            },
            question: {
                type: String,
                required: true
            },
            isMultiAns: {
                type: Boolean,
                required: true
            },
            optionA: {
                type: String,
                required: true
            },
            checkA: {
                type: Boolean,
                required: true
            },
            optionB: {
                type: String,
                required: true
            },
            checkB: {
                type: Boolean,
                required: true
            },
            optionC: {
                type: String,
                required: true
            },
            checkC: {
                type: Boolean,
                required: true
            },
            optionD: {
                type: String,
                required: true
            },
            checkD: {
                type: Boolean,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            }
        });
        return schema;
    }
}
var Question = mongooseConnection.model("Question", QuestionSchema.schema);
exports.Question = Question;
//# sourceMappingURL=Question.js.map