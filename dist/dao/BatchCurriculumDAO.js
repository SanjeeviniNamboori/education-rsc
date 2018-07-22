"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchCurriculum_1 = require("./../models/schemas/BatchCurriculum");
class BatchCurriculumDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchCurriculum_1.BatchCurriculum);
    }
    retrieve(query) {
        return super.retrieve(query).populate("batch", "_id name").populate("topic", "_id name");
    }
    findById(id) {
        return super.findById(id).populate("batch", "_id name").populate("topic", "_id name");
    }
}
exports.BatchCurriculumDAO = BatchCurriculumDAO;
Object.seal(BatchCurriculumDAO);
//# sourceMappingURL=BatchCurriculumDAO.js.map