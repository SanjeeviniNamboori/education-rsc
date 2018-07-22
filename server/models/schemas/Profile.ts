import {DataAccess} from "./../../config/DataAccess";
import { IProfile } from "./../interfaces/IProfile";


var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProfileSchema {

    static get schema() {
        var schema = mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            mobile: {
                type: String,
            },
            email: {
                type: String,
                required: true
            },
            address: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Address',
                required: true,
            }
        });

        return schema;
    }

}
var Profile = mongooseConnection.model<IProfile>("Profile", ProfileSchema.schema);
export { Profile };
