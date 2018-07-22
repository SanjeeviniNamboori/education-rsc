"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class BaseDAO {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    create(item) {
        return this.model.create(item);
    }
    retrieve(query) {
        return this.model.find(query);
    }
    update(_id, item) {
        return this.model.update({ _id: _id }, item);
    }
    save(item) {
        const _id = item._id;
        if (_id) {
            return this.update(_id, item);
        }
        else {
            return this.create(item);
        }
    }
    edit(_id, item) {
        return this.model.findOneAndUpdate({ _id: _id }, item, { upsert: true, new: true });
    }
    delete(_id) {
        return this.model.remove({ _id: this.toObjectId(_id) });
    }
    findById(_id) {
        return this.model.findById(_id);
    }
    findOne(cond) {
        return this.model.findOne(cond);
    }
    find(cond, fields, options) {
        return this.model.find(cond, fields, options);
    }
    findOneAndUpdate(cond, options) {
        return this.model.findOneAndUpdate(cond, options);
    }
    toObjectId(_id) {
        return mongoose.Types.ObjectId.createFromHexString(_id);
    }
}
exports.BaseDAO = BaseDAO;
//# sourceMappingURL=BaseDAO.js.map