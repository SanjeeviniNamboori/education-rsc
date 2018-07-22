import { DataAccess } from "./../../config/DataAccess";
import { ITopic } from "./../interfaces/ITopic";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class TopicSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            detail: {
                type: String,
                required: true
            },
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
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

var Topic = mongooseConnection.model<ITopic>("Topic", TopicSchema.schema);
export { Topic };
