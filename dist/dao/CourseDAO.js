"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Course_1 = require("./../models/schemas/Course");
class CourseDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Course_1.Course);
    }
    save(item) {
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query);
    }
}
exports.CourseDAO = CourseDAO;
Object.seal(CourseDAO);
//# sourceMappingURL=CourseDAO.js.map