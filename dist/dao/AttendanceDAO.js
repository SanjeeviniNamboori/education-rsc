"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Attendance_1 = require("./../models/schemas/Attendance");
class AttendanceDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Attendance_1.Attendance);
    }
    save(item) {
        item.account = item.account._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("account");
    }
    findById(id) {
        return super.findById(id).populate("account");
    }
}
exports.AttendanceDAO = AttendanceDAO;
Object.seal(AttendanceDAO);
//# sourceMappingURL=AttendanceDAO.js.map