"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Menu_1 = require("./../models/schemas/Menu");
class MenuDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Menu_1.Menu);
    }
}
exports.MenuDAO = MenuDAO;
Object.seal(MenuDAO);
//# sourceMappingURL=MenuDAO.js.map