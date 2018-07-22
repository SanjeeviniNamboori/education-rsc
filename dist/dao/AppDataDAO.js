"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const AppData_1 = require("./../models/schemas/AppData");
class AppDataDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(AppData_1.AppData);
    }
}
exports.AppDataDAO = AppDataDAO;
Object.seal(AppDataDAO);
//# sourceMappingURL=AppDataDAO.js.map