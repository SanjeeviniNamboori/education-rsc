import {AttendanceDAO} from "../dao/AttendanceDAO";
import {IAttendance} from "./../models/interfaces/IAttendance";
import {AccountDAO} from "../dao/AccountDAO";

export class AttendanceService {
    private attendanceDao: AttendanceDAO;
    private accountDao: AccountDAO;

    constructor() {
        this.attendanceDao = new AttendanceDAO();
        this.accountDao = new AccountDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this.attendanceDao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.attendanceDao.findById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IAttendance) {
        try {
            let attendanceData: any = await this.attendanceDao.save(item);
            let returnData = {
                _id: item._id ? item._id : attendanceData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = (await this.attendanceDao.delete(id))
            let returnData = {
                message: "Link Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
