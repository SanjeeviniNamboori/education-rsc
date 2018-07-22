"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Link_1 = require("./../models/schemas/Link");
class LinkDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Link_1.Link);
    }
    save(item) {
        item.topic = item.topic._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate('topic');
    }
    findById(id) {
        return super.findById(id).populate("topic");
    }
}
exports.LinkDAO = LinkDAO;
Object.seal(LinkDAO);
//# sourceMappingURL=LinkDAO.js.map