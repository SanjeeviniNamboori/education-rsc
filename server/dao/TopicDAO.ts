import { BaseDAO } from "./../config/BaseDAO";
import { ITopic } from "./../models/interfaces/ITopic";
import { Topic } from "./../models/schemas/Topic";

export class TopicDAO extends BaseDAO<ITopic> {
    constructor() {
        super(Topic);
    }

    save(item: ITopic) {
        item.course = item.course._id;
        return super.save(item);
    }

    retrieve(query: object) {
        return super.retrieve(query).populate("course", "_id name detail");
    }

    findById(id: string) {
        return super.findById(id).populate("course", "_id name detail");
    }
}

Object.seal(TopicDAO);
