"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const BatchAssignmentReview_1 = require("./../models/schemas/BatchAssignmentReview");
class BatchAssignmentReviewDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(BatchAssignmentReview_1.BatchAssignmentReview);
    }
}
exports.BatchAssignmentReviewDAO = BatchAssignmentReviewDAO;
Object.seal(BatchAssignmentReviewDAO);
//# sourceMappingURL=BatchAssignmentReviewDAO.js.map