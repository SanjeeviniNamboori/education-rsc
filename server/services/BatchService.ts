import { BatchDAO } from "../dao/BatchDAO";
import { CourseDAO } from "../dao/CourseDAO";
import { BranchDAO } from "../dao/BranchDAO";
import { IBatch } from "./../models/interfaces/IBatch";
import { ICourse } from "../models/interfaces/ICourse";
import { IBranch } from "../models/interfaces/IBranch";
import { BatchMemberDAO } from "../dao/BatchMemberDAO";
import { BatchCurriculumDAO } from "../dao/BatchCurriculumDAO";
import { IBatchCurriculum } from "../models/interfaces/IBatchCurriculum";
import { TopicDAO } from "../dao/TopicDAO";


export class BatchService {
    private topicDao: TopicDAO;
    private batchDao: BatchDAO;
    private courseDao: CourseDAO;
    private branchDao: BranchDAO;
    private bmDao: BatchMemberDAO;
    private bcDao: BatchCurriculumDAO;

    constructor() {
        this.batchDao = new BatchDAO();
        this.courseDao = new CourseDAO();
        this.branchDao = new BranchDAO();
        this.topicDao = new TopicDAO();
        this.bmDao = new BatchMemberDAO();
        this.bcDao = new BatchCurriculumDAO();
    }


    async batchData(data: any) {
        let batches = JSON.parse(JSON.stringify(data));
        let students = 0;
        let trainers = 0;
        let members: any = null;
        for (let batch of batches) {
            members = await this.bmDao.retrieve({ batch: batch._id });
            students = 0;
            trainers = 0;
            for (let member of members) {
                switch (member.account.role) {
                    case 'Student': students++; break;
                    case 'Trainer': trainers++; break;
                    default: break;
                }
            }
            batch.students = students;
            batch.trainers = trainers;
        };
        return batches;
    }

    async retrieve(reqData: any) {
        try {
            var batches: any = await this.batchDao.retrieve(reqData);
            return Promise.resolve(this.batchData(batches))
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.batchDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IBatch) {
        try {
            let batchData: any = await this.batchDao.save(item);
            let returnData = {
                _id: item._id ? item._id : batchData._id,
                message: "Saved Successfully"
            }
            if (item._id == null) {
                let topicdata = {
                    course: item.course
                }
                var bcDao = this.bcDao
                let topics = await this.topicDao.retrieve(topicdata);
                topics.forEach(async function(topicdata) {
                    let saveobj = <IBatchCurriculum>{
                        batch: { _id: returnData._id },
                        topic: { _id: topicdata._id }
                    }
                    let bc: any = await bcDao.save(saveobj)
                })
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = await this.batchDao.findById(id)
            data.status = false;
            let result: any = await this.batchDao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async user(reqData: any) {
        try {
            let data: any = await this.bmDao.batchretrieve(reqData);
            let _id = [];
            data.forEach(function(item) {
                _id.push(item.batch._id)
            })
            let batches: any = await this.batchDao.retrieve({ _id: _id })
            return Promise.resolve(this.batchData(batches))
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
