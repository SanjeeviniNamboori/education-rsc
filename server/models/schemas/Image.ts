import { DataAccess } from "./../../config/DataAccess";
import { IImage } from "./../interfaces/IImage";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

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
const Image = mongooseConnection.model<IImage>("Image", ImageSchema.schema);
export { Image }
