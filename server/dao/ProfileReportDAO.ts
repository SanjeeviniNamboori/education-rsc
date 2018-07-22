import { BaseDAO } from "./../config/BaseDAO";
import { IProfileReport } from "./../models/interfaces/IProfileReport";
import { ProfileReport} from "./../models/schemas/ProfileReport";

export class ProfileReportDAO extends BaseDAO<IProfileReport> {
    constructor() {
        super(ProfileReport);
    }

    update(_id: any, item: IProfileReport) {
        return this.model.update({ _id: _id }, item);
    }

}

Object.seal(ProfileReportDAO);
