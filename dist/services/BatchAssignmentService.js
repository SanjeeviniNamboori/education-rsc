"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BatchAssignmentDAO_1 = require("../dao/BatchAssignmentDAO");
class BatchAssignmentService {
    constructor() {
        this._dao = new BatchAssignmentDAO_1.BatchAssignmentDAO();
    }
    retrieve() {
        return this._dao.retrieve({});
    }
    save(item) {
        return this._dao.save(item);
    }
}
exports.BatchAssignmentService = BatchAssignmentService;
//# sourceMappingURL=BatchAssignmentService.js.map