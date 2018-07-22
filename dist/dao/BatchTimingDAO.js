"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchTiming_1 = require("./../models/schemas/BatchTiming");
class BatchTimingDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchTiming_1.BatchTiming);
    }
    save(item) {
        item.batch = item.batch._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate('batch');
    }
    findById(id) {
        return super.findById(id).populate("batch");
    }
}
exports.BatchTimingDAO = BatchTimingDAO;
Object.seal(BatchTimingDAO);
//# sourceMappingURL=BatchTimingDAO.js.map