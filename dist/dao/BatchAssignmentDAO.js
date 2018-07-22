"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchAssignment_1 = require("./../models/schemas/BatchAssignment");
class BatchAssignmentDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchAssignment_1.BatchAssignment);
    }
}
exports.BatchAssignmentDAO = BatchAssignmentDAO;
Object.seal(BatchAssignmentDAO);
//# sourceMappingURL=BatchAssignmentDAO.js.map