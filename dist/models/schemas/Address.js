"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataAccess_1 = require("./../../config/DataAccess");
var mongoose = DataAccess_1.DataAccess.mongooseInstance;
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
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
const Address = mongooseConnection.model("Address", AddressSchema.schema);
exports.Address = Address;
//# sourceMappingURL=Address.js.map