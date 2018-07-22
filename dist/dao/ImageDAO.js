"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Image_1 = require("./../models/schemas/Image");
class ImageDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Image_1.Image);
    }
    save(item) {
        return super.save(item);
    }
    retrieve(query) {
        return super.retrieve(query);
    }
    findById(id) {
        return super.findById(id);
    }
}
exports.ImageDAO = ImageDAO;
Object.seal(Image_1.Image);
//# sourceMappingURL=ImageDAO.js.map