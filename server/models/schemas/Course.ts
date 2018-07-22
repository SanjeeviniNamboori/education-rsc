import { DataAccess } from "./../../config/DataAccess";
import { ICourse } from "./../interfaces/ICourse";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class CourseSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            img: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Image',
                required: true,
            },
            detail: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                default: true
            }
        });
        return schema;
    }

}
var Course = mongooseConnection.model<ICourse>("Course", CourseSchema.schema);
export { Course };
