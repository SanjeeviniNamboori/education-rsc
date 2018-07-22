import { BaseDAO } from "./../config/BaseDAO";
import {IAttendance} from "./../models/interfaces/IAttendance";
import {Attendance} from "./../models/schemas/Attendance";

export class AttendanceDAO extends BaseDAO<IAttendance> {
    constructor() {
        super(Attendance);
    }
    save(item: IAttendance) {
        item.account = item.account._id;
        return super.save(item);
    }
    retrieve(query: object) {
        return super.retrieve(query).populate("account");
    }
    findById(id: string) {
        return super.findById(id).populate("account");
    }
}

Object.seal(AttendanceDAO);
