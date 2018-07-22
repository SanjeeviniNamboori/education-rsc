import { DataAccess } from "./../../config/DataAccess";
import { IAddress } from "./../interfaces/IAddress";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AddressSchema {

    static get schema() {
        var schema = mongoose.Schema({
            street: {
                type: String,
                required: false
            },
            area: {
                type: String,
                required: false
            },
            city: {
                type: String,
                required: false
            },
            state: {
                type: String,
                required: false
            },
            zipcode: {
                type: Number,
                required: false
            },
            country: {
                type: String,
                required: false,
                default: "India"
            }
        });

        return schema;
    }

}
const Address = mongooseConnection.model<IAddress>("Address", AddressSchema.schema);
export { Address }
