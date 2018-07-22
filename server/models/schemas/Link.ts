import {DataAccess} from "./../../config/DataAccess";
import {ILink} from "./../interfaces/ILink";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class LinkSchema {

  static get schema () {
       var schema =  mongoose.Schema({
           topic : {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Topic',
             required: true,
           },
           detail: {
               type: String,
               required: true
           },
           link: {
               type: String,
               required: true
           },
           type: {
               type: String,
               required: true
           }
       });

       return schema;
   }

}
var Link = mongooseConnection.model<ILink>("Link",LinkSchema.schema);
export { Link };
