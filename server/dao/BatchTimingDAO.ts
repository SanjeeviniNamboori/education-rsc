import { BaseDAO } from "./../config/BaseDAO";
import {IBatchTiming}from "./../models/interfaces/IBatchTiming";
import {BatchTiming} from "./../models/schemas/BatchTiming";

export class BatchTimingDAO  extends BaseDAO<IBatchTiming> {
    constructor () {
        super(BatchTiming);
    }
    save(item: IBatchTiming)  {
        item.batch = item.batch._id;
        return super.save(item);
    }
    retrieve (query: object) {
        return super.retrieve(query).populate('batch');
    }
    findById(id: string) {
        return super.findById(id).populate("batch");
    }
}

Object.seal(BatchTimingDAO);
