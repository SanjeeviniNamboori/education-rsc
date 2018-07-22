import { BaseDAO } from "./../config/BaseDAO";
import {IBatchCurriculum } from "./../models/interfaces/IBatchCurriculum";
import {BatchCurriculum} from "./../models/schemas/BatchCurriculum";
import { Batch} from "./../models/schemas/Batch";
import { Topic} from "./../models/schemas/Topic";

export class BatchCurriculumDAO extends BaseDAO<IBatchCurriculum> {
    constructor() {
        super(BatchCurriculum);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate("batch", "_id name").populate("topic", "_id name");
    }
    findById(id: string) {
        return super.findById(id).populate("batch", "_id name").populate("topic", "_id name");
    }
}

Object.seal(BatchCurriculumDAO);
