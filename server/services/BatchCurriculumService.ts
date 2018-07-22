
import { BatchCurriculumDAO } from "../dao/BatchCurriculumDAO";
import { IBatchCurriculum } from "./../models/interfaces/IBatchCurriculum";
import { BatchTimingDAO } from "../dao/BatchTimingDAO";
import { IBatchTiming } from "../models/interfaces/IBatchTiming";
import { TopicDAO } from "../dao/TopicDAO";

export class BatchCurriculumService {
    private _dao: BatchCurriculumDAO;
    private timedao: BatchTimingDAO;
    private topicdao: TopicDAO;

    constructor() {
        this._dao = new BatchCurriculumDAO();
        this.timedao = new BatchTimingDAO();
        this.topicdao = new TopicDAO();
    }

    async retrieve(query) {
        try {
            let data: any = await this._dao.retrieve(query);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: any) {
        try {
            let data: any = await this._dao.findById(item._id);
            data.topicStatus = item.topicStatus;
            let result: any = await this._dao.update(item._id, data);
            return Promise.resolve({
                "message": "Changed status successfully",
                "data": result
            })
        } catch(error) {
            return Promise.reject(error)
        }
    }

    // to be continued in phase 2
    // async update(item: IBatchCurriculum) {
    //     if (item.topicStatus == "Completed") {
    //         let topicdoc: any = await this._dao.findById(item._id);
    //         let starttime = topicdoc.fromTime;
    //         let topicstartbatchtiming = await this.timedao.retrieve({ batch: item.batch._id });
    //     }
    //     let id = item._id;
    //     return this._dao.update(id, item);
    // }
}
