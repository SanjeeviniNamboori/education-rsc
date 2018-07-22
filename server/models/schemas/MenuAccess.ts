import {DataAccess} from "./../../config/DataAccess";
import {IMenuAccess} from "./../interfaces/IMenuAccess";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class MenuAccessSchema {

  static get schema () {
       var schema =  mongoose.Schema({
          role : {
               type: String,
               required: true
           },
           menu: {
               type: mongoose.Schema.Types.ObjectId,
               ref:'Menu',
               required: true
           },
           status: {
               type: Boolean,
               required: true
           },
       });

       return schema;
   }

}
var MenuAccess = mongooseConnection.model<IMenuAccess>("MenuAccess", MenuAccessSchema.schema);
export { MenuAccess };
