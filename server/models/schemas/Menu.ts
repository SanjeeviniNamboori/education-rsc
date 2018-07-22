import {DataAccess} from "./../../config/DataAccess";
import {IMenu} from "./../interfaces/IMenu";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class MenuSchema {

  static get schema () {
       var schema =  mongoose.Schema({
           name : {
               type: String,
               required: true
           },
           link: {
               type: String,
               required: true,
               unique: true
           },
           icon: {
               type: String,
               required: true
           }
       });

       return schema;
   }

}
var Menu = mongooseConnection.model<IMenu>("Menu", MenuSchema.schema);
export { Menu };
