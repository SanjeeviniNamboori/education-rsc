"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
class ImageSchema {
    static get schema() {
        var schema = mongoose.Schema({
            img: {
                type: String,
                required: true
            }
        });
        return schema;
    }
}
const Image = mongooseConnection.model("Image", ImageSchema.schema);
exports.Image = Image;
//# sourceMappingURL=Image.js.map