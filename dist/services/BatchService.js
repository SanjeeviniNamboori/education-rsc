"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BatchDAO_1 = require("../dao/BatchDAO");
const CourseDAO_1 = require("../dao/CourseDAO");
const BranchDAO_1 = require("../dao/BranchDAO");
const BatchMemberDAO_1 = require("../dao/BatchMemberDAO");
const BatchCurriculumDAO_1 = require("../dao/BatchCurriculumDAO");
const TopicDAO_1 = require("../dao/TopicDAO");
class BatchService {
    constructor() {
        this.batchDao = new BatchDAO_1.BatchDAO();
        this.courseDao = new CourseDAO_1.CourseDAO();
        this.branchDao = new BranchDAO_1.BranchDAO();
        this.topicDao = new TopicDAO_1.TopicDAO();
        this.bmDao = new BatchMemberDAO_1.BatchMemberDAO();
        this.bcDao = new BatchCurriculumDAO_1.BatchCurriculumDAO();
    }
    batchData(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let batches = JSON.parse(JSON.stringify(data));
            let students = 0;
            let trainers = 0;
            let members = null;
            for (let batch of batches) {
                members = yield this.bmDao.retrieve({ batch: batch._id });
                students = 0;
                trainers = 0;
                for (let member of members) {
                    switch (member.account.role) {
                        case 'Student':
                            students++;
                            break;
                        case 'Trainer':
                            trainers++;
                            break;
                        default: break;
                    }
                }
                batch.students = students;
                batch.trainers = trainers;
            }
            ;
            return batches;
        });
    }
    retrieve(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var batches = yield this.batchDao.retrieve(reqData);
                return Promise.resolve(this.batchData(batches));
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.batchDao.findById(id);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let batchData = yield this.batchDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : batchData._id,
                    message: "Saved Successfully"
                };
                if (item._id == null) {
                    let topicdata = {
                        course: item.course
                    };
                    var bcDao = this.bcDao;
                    let topics = yield this.topicDao.retrieve(topicdata);
                    topics.forEach(function (topicdata) {
                        return __awaiter(this, void 0, void 0, function* () {
                            let saveobj = {
                                batch: { _id: returnData._id },
                                topic: { _id: topicdata._id }
                            };
                            let bc = yield bcDao.save(saveobj);
                        });
                    });
                }
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.batchDao.findById(id);
                data.status = false;
                let result = yield this.batchDao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    user(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.bmDao.batchretrieve(reqData);
                let _id = [];
                data.forEach(function (item) {
                    _id.push(item.batch._id);
                });
                let batches = yield this.batchDao.retrieve({ _id: _id });
                return Promise.resolve(this.batchData(batches));
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.BatchService = BatchService;
//# sourceMappingURL=BatchService.js.map