import { BaseDAO } from "./../config/BaseDAO";
import {IBatch} from "./../models/interfaces/IBatch";
import {Batch} from "./../models/schemas/Batch";

export class BatchDAO extends BaseDAO<IBatch> {
    constructor() {
        super(Batch);
    }
    save(item: IBatch) {
        item.course = item.course._id;
        item.branch = item.branch._id;
        return super.save(item);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate("course", '_id name img detail').populate("branch", '_id name');
    }
    findById(id: string) {
        return super.findById(id).populate("course").populate("branch");
    }
}

Object.seal(BatchDAO);
