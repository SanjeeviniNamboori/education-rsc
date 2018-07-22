import {DataAccess} from "./../../config/DataAccess";
import {IBatchTiming} from "./../interfaces/IBatchTiming";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BatchTimingSchema {

  static get schema () {
       var schema =  mongoose.Schema({

           inTime: {
               type: Date,
               required: true
           },
           outTime: {
               type: Date,
               required: true
           },
           batch : {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Batch',
             required: true,
           }
       });

       return schema;
   }

}
var BatchTiming = mongooseConnection.model<IBatchTiming>("BatchTiming",BatchTimingSchema.schema);
export { BatchTiming };
