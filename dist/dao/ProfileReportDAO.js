"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const ProfileReport_1 = require("./../models/schemas/ProfileReport");
class ProfileReportDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(ProfileReport_1.ProfileReport);
    }
    update(_id, item) {
        return this.model.update({ _id: _id }, item);
    }
}
exports.ProfileReportDAO = ProfileReportDAO;
Object.seal(ProfileReportDAO);
//# sourceMappingURL=ProfileReportDAO.js.map