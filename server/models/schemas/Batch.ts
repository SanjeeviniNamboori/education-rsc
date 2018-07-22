import { DataAccess } from "./../../config/DataAccess";
import { IBatch } from "./../interfaces/IBatch";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            batchType: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            },
            course: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Course',
                required: true,
            },
            branch: {
                type: String,
                ref: 'Branch',
                required: true,
            },
            fromTime: {
                type: String,
                required: true
            },
            toTime: {
                type: String,
                required: true
            },
            fromDate: {
                type: String,
                required: true
            },
            toDate: {
                type: String,
                required: true
            }
        });

        return schema;
    }

}
var Batch = mongooseConnection.model<IBatch>("Batch", BatchSchema.schema);
export { Batch };
