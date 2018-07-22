import { BaseDAO } from "./../config/BaseDAO";
import { IBranch } from "./../models/interfaces/IBranch";
import { Branch } from "./../models/schemas/Branch";

export class BranchDAO extends BaseDAO<IBranch> {
    constructor() {
        super(Branch);
    }
    save(item: any) {
        item.address = item.address._id;
        return super.edit({ _id: item._id }, item);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate("address");
    }
    findById(id: string) {
        return super.findById(id).populate("address");
    }
}

Object.seal(BranchDAO);
