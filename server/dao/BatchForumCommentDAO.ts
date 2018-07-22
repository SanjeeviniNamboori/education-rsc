import { BaseDAO } from "./../config/BaseDAO";
import { IBatchForumComment } from "./../models/interfaces/IBatchForumComment";
import { BatchForumComment } from "./../models/schemas/BatchForumComment";

export class BatchForumCommentDAO extends BaseDAO<IBatchForumComment> {
    constructor() {
        super(BatchForumComment);
    }

    save(item: IBatchForumComment) {
        item.batchForum = item.batchForum._id;
        return super.save(item);
    }

    retrieve(query: object) {
        return super.retrieve(query).populate("batchForum");
    }

    findById(id: string) {
        return super.findById(id).populate("batchForum");
    }
}

Object.seal(BatchForumCommentDAO);
