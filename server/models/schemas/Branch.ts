import { DataAccess } from "./../../config/DataAccess";
import { IBranch } from "./../interfaces/IBranch";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class BranchSchema {

    static get schema() {
        var schema = mongoose.Schema({
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            loc: {
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
const Branch = mongooseConnection.model<IBranch>("Branch", BranchSchema.schema);
export { Branch }
