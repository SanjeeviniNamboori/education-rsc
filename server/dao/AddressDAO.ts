import { BaseDAO } from "./../config/BaseDAO";
import { IAddress } from "./../models/interfaces/IAddress";
import {Address} from "./../models/schemas/Address";

export class AddressDAO extends BaseDAO<IAddress> {
    constructor() {
        super(Address);
    }
}

Object.seal(AddressDAO);
