import {DataAccess} from "./../../config/DataAccess";
import { IProfileReport } from  "./../interfaces/IProfileReport";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProfileReportSchema {

  static get schema () {
       var schema =  mongoose.Schema({
           joinDate : {
               type: Date,
               required: true
           },
           leaveDate: {
               type: Date,
               required: false
           },
           account: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Account',
               required: true
           },
           updatedBy:{
            type: String,
            required: true
           },
           updatedDate:{
               type: Date, default: Date.now
           }
       });

       return schema;
   }

}
const ProfileReport = mongooseConnection.model<IProfileReport>("ProfileReport", ProfileReportSchema.schema);
export { ProfileReport }
