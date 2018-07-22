"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Question_1 = require("./../models/schemas/Question");
class QuestionDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Question_1.Question);
    }
}
exports.QuestionDAO = QuestionDAO;
Object.seal(QuestionDAO);
//# sourceMappingURL=QuestionDAO.js.map