"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchStudentAssignment_1 = require("./../models/schemas/BatchStudentAssignment");
class BatchStudentAssignmentDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchStudentAssignment_1.BatchStudentAssignment);
    }
}
exports.BatchStudentAssignmentDAO = BatchStudentAssignmentDAO;
Object.seal(BatchStudentAssignmentDAO);
//# sourceMappingURL=BatchStudentAssignmentDAO.js.map