"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BatchAssignmentReviewDAO_1 = require("../dao/BatchAssignmentReviewDAO");
class BatchAssignmentReviewService {
    constructor() {
        this._dao = new BatchAssignmentReviewDAO_1.BatchAssignmentReviewDAO();
    }
    retrieve() {
        return this._dao.retrieve({});
    }
    save(item) {
        return this._dao.save(item);
    }
}
exports.BatchAssignmentReviewService = BatchAssignmentReviewService;
//# sourceMappingURL=BatchAssignmentReviewService.js.map