import {DataAccess} from "./../../config/DataAccess";
import {IAppData} from "./../interfaces/IAppData";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AppDataSchema {

  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           key: {
               type: String,
               required: true
           },
           code: {
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
var AppData = mongooseConnection.model<IAppData>("AppData", AppDataSchema.schema);
export { AppData };
