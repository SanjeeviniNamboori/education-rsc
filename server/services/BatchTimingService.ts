import {BatchTimingDAO} from "../dao/BatchTimingDAO";
import {IBatchTiming} from "./../models/interfaces/IBatchTiming";
import {BatchDAO} from "../dao/BatchDAO";

export class BatchTimingService {
    private batchTimingDao: BatchTimingDAO;
    private batchDao: BatchDAO;

    constructor() {
        this.batchTimingDao = new BatchTimingDAO();
        this.batchDao = new BatchDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this.batchTimingDao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.batchTimingDao.findById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IBatchTiming) {
        try {
            let batchTimingData: any = await this.batchTimingDao.save(item);
            let returnData = {
                _id: item._id ? item._id : batchTimingData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
