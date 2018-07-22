import { DataAccess } from "./../../config/DataAccess";
import { IAccount } from "./../interfaces/IAccount";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AccountSchema {

    static get schema() {
        var schema = mongoose.Schema({
            password: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            profile: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Profile',
                required: true,
            },
            status: {
                type: Boolean,
                default: true
            },
            branch: {
                type: String,
                ref: 'Branch',
                required: true
            }
        });

        return schema;
    }

}
const Account = mongooseConnection.model<IAccount>("Account", AccountSchema.schema);
export { Account }
