import {DataAccess} from "./../../config/DataAccess";
import {IBatchAssignmentReview} from "./../interfaces/IBatchAssignmentReview";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchAssignmentReviewSchema {

  static get schema () {
       var schema =  mongoose.Schema({

          batchStudentAssignmentId : {
             type: String,
             required : true
           },
         	questionId : {
            type: String,
            required : true
          },
         	YourAns : {
            type : String,
            required : true
          },
         	isRightAns : {
            type : String,
            required : true
          }
       });

       return schema;
   }

}
var BatchAssignmentReview = mongooseConnection.model<IBatchAssignmentReview>("BatchAssignmentReview", BatchAssignmentReview.schema);
export { BatchAssignmentReview };
