"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Address_1 = require("./../models/schemas/Address");
class AddressDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Address_1.Address);
    }
}
exports.AddressDAO = AddressDAO;
Object.seal(AddressDAO);
//# sourceMappingURL=AddressDAO.js.map