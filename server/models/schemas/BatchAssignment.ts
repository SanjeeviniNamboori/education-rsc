import {DataAccess} from "./../../config/DataAccess";
import {IBatchAssignment} from "./../interfaces/IBatchAssignment";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchAssignmentSchema {

  static get schema() {
    var schema = mongoose.Schema({
      detail: {
        type: String,
        required: false
      },
      batchId: {
        type: String,
        required: true
      },
      txnDate: {
        type: Date,
        required: true
      },
      passMarks: {
        type: Number,
        required: true
      },
      topicId: {
        type: String,
        required: true
      },
      status: {
        type: Boolean,
        required: true
      }
    });

    return schema;
  }

}
var BatchAssignment = mongooseConnection.model<IBatchAssignment>("BatchAssignment", BatchAssignmentSchema.schema);
export { BatchAssignment };
