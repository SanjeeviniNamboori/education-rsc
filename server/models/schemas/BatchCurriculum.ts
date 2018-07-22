import { DataAccess } from "./../../config/DataAccess";
import { IBatchCurriculum } from "./../interfaces/IBatchCurriculum";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchCurriculumSchema {

    static get schema() {
        var schema = mongoose.Schema({
            hrs: {
                type: String,
                default: null
            },
            batch: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Batch',
                required: true
            },
            topic: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Topic',
                required: true
            },
            topicStatus: {
                type: String,
                default: "NotYetStarted",
                required: true
            },
            fromTime: {
                type: Date,
                default: null
            },
            toTime: {
                type: Date,
                default: null
            },
            fromDate: {
                type: Date,
                default: null
            },
            toDate: {
                type: Date,
                default: null
            }
        });

        return schema;
    }

}
var BatchCurriculum = mongooseConnection.model<IBatchCurriculum>("BatchCurriculum", BatchCurriculumSchema.schema);
export { BatchCurriculum };
