"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Batch_1 = require("./../models/schemas/Batch");
class BatchDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Batch_1.Batch);
    }
    save(item) {
        item.course = item.course._id;
        item.branch = item.branch._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("course", '_id name img detail').populate("branch", '_id name');
    }
    findById(id) {
        return super.findById(id).populate("course").populate("branch");
    }
}
exports.BatchDAO = BatchDAO;
Object.seal(BatchDAO);
//# sourceMappingURL=BatchDAO.js.map