"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Branch_1 = require("./../models/schemas/Branch");
class BranchDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Branch_1.Branch);
    }
    save(item) {
        item.address = item.address._id;
        return super.edit({ _id: item._id }, item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("address");
    }
    findById(id) {
        return super.findById(id).populate("address");
    }
}
exports.BranchDAO = BranchDAO;
Object.seal(BranchDAO);
//# sourceMappingURL=BranchDAO.js.map