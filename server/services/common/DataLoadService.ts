
import { AppDataDAO } from "../../dao/AppDataDAO";
import { IAppData } from "./../../models/interfaces/IAppData";
import { AccountDAO } from "../../dao/AccountDAO";
import { CourseDAO } from "../../dao/CourseDAO";
import { BranchDAO } from "../../dao/BranchDAO";

export class DataLoadService {
    private _appDataDao: AppDataDAO;
    private accountDao: AccountDAO;
    private courseDao: CourseDAO;
    private branchDao: BranchDAO;

    constructor() {
        this._appDataDao = new AppDataDAO();
        this.accountDao = new AccountDAO();
        this.courseDao = new CourseDAO();
        this.branchDao = new BranchDAO();
    }

    async codes() {
        try {
            let data: any = [];
            //data.push({ key: "ROLE", name: "Roles" })
            data.push({ key: "TRACKER", name: "Types" })
            data.push({ key: "BATCH_TYPE", name: "Batch Type" })
            data.push({ key: "LINK_TYPE", name: "Link Type" })
            data.push({ key: "TOPIC_STATUS", name: "Topic Status" })
            data.push({ key: "TIMINGS", name: "Timings" })
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async roles() {
        try {
            let data: any = [];
            data.push({ key: "Student", name: "Student" })
            data.push({ key: "Trainer", name: "Trainer" })
            data.push({ key: "Admin", name: "Admin" })
            data.push({ key: "NA", name: "Not Assigned" })
            data.push({ key: "SuperAdmin", name: "Super Admin" })
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }
     async tracker() {
        try {
            let data: any = await this._appDataDao.find({ code: 'TRACKER' }, 'key name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async batchTypes() {
        try {
            let data: any = await this._appDataDao.find({ code: 'BATCH_TYPE' }, 'key name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async linkTypes() {
        try {
            let data: any = await this._appDataDao.find({ code: 'LINK_TYPE' }, 'key name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async timings() {
        try {
            let data: any = await this._appDataDao.find({ code: 'TIMINGS' }, 'key name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async topicStatus() {
        try {
            let data: any = await this._appDataDao.find({ code: 'TOPIC_STATUS' }, 'key name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }


    async studentList() {
        try {
            let data: any = await this.accountDao.student();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async trainerList() {
        try {
            let data: any = await this.accountDao.trainer();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async branchStudentlist(branchId) {
        try {
            let data: any = await this.accountDao.branchStudent(branchId);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async branchTrainerlist(branchId) {
        try {
            let data: any = await this.accountDao.branchTrainer(branchId);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async courseList() {
        try {
            let data: any = await this.courseDao.find({}, 'name detail');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async branchList() {
        try {
            let data: any = await this.branchDao.find({}, 'name');
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
