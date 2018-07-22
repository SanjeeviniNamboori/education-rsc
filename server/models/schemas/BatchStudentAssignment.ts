
import {DataAccess} from "./../../config/DataAccess";
import { IBatchStudentAssignment} from "./../interfaces/IBatchStudentAssignment";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchStudentAssignmentSchema {

  static get schema () {
       var schema =  mongoose.Schema({

          batchAssignmentId : {
             type: String,
             required : false
           },
         	userId : {
            type: String,
            required : true
          },
         	marks : {
            type : Number,
            required : true
          },
         	status : {
            type : Boolean,
            required : true
          },
          txnDate : {
            type : Date,
            required : true
          }
       });

       return schema;
   }

}
var BatchStudentAssignment = mongooseConnection.model<IBatchStudentAssignment>("BatchStudentAssignment", BatchStudentAssignmentSchema.schema);
export { BatchStudentAssignment };
