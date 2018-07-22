import { BaseDAO } from "./../config/BaseDAO";
import { IBatchForum } from "./../models/interfaces/IBatchForum";
import { BatchForum } from "./../models/schemas/BatchForum";

export class BatchForumDAO extends BaseDAO<IBatchForum> {
    constructor() {
        super(BatchForum);
    }

    save(item: IBatchForum) {
        item.batch = item.batch._id;
        return super.save(item);
    }

    retrieve(query: object) {
        return super.retrieve(query).populate("batch");
    }

    findById(id: string) {
        return super.findById(id).populate("batch");
    }
}

Object.seal(BatchForumDAO);
