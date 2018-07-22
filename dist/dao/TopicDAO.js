"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Topic_1 = require("./../models/schemas/Topic");
class TopicDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Topic_1.Topic);
    }
    save(item) {
        item.course = item.course._id;
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query).populate("course", "_id name detail");
    }
    findById(id) {
        return super.findById(id).populate("course", "_id name detail");
    }
}
exports.TopicDAO = TopicDAO;
Object.seal(TopicDAO);
//# sourceMappingURL=TopicDAO.js.map