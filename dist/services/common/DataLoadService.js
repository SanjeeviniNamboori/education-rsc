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
const AppDataDAO_1 = require("../../dao/AppDataDAO");
const AccountDAO_1 = require("../../dao/AccountDAO");
const CourseDAO_1 = require("../../dao/CourseDAO");
const BranchDAO_1 = require("../../dao/BranchDAO");
class DataLoadService {
    constructor() {
        this._appDataDao = new AppDataDAO_1.AppDataDAO();
        this.accountDao = new AccountDAO_1.AccountDAO();
        this.courseDao = new CourseDAO_1.CourseDAO();
        this.branchDao = new BranchDAO_1.BranchDAO();
    }
    codes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = [];
                //data.push({ key: "ROLE", name: "Roles" })
                data.push({ key: "TRACKER", name: "Types" });
                data.push({ key: "BATCH_TYPE", name: "Batch Type" });
                data.push({ key: "LINK_TYPE", name: "Link Type" });
                data.push({ key: "TOPIC_STATUS", name: "Topic Status" });
                data.push({ key: "TIMINGS", name: "Timings" });
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    roles() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = [];
                data.push({ key: "Student", name: "Student" });
                data.push({ key: "Trainer", name: "Trainer" });
                data.push({ key: "Admin", name: "Admin" });
                data.push({ key: "NA", name: "Not Assigned" });
                data.push({ key: "SuperAdmin", name: "Super Admin" });
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    tracker() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._appDataDao.find({ code: 'TRACKER' }, 'key name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    batchTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._appDataDao.find({ code: 'BATCH_TYPE' }, 'key name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    linkTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._appDataDao.find({ code: 'LINK_TYPE' }, 'key name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    timings() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._appDataDao.find({ code: 'TIMINGS' }, 'key name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    topicStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this._appDataDao.find({ code: 'TOPIC_STATUS' }, 'key name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    studentList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.accountDao.student();
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    trainerList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.accountDao.trainer();
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    branchStudentlist(branchId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.accountDao.branchStudent(branchId);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    branchTrainerlist(branchId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.accountDao.branchTrainer(branchId);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    courseList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.courseDao.find({}, 'name detail');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    branchList() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.branchDao.find({}, 'name');
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.DataLoadService = DataLoadService;
//# sourceMappingURL=DataLoadService.js.map