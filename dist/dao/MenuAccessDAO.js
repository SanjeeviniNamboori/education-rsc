"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const MenuAccess_1 = require("./../models/schemas/MenuAccess");
class MenuAccessDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(MenuAccess_1.MenuAccess);
    }
    save(item) {
        item.menu = item.menu._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("menu");
    }
    findById(id) {
        return super.findById(id).populate("menu");
    }
}
exports.MenuAccessDAO = MenuAccessDAO;
Object.seal(MenuAccessDAO);
//# sourceMappingURL=MenuAccessDAO.js.map