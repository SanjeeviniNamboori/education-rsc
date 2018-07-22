import { ProfileReportDAO } from "../dao/ProfileReportDAO";
import { IProfileReport } from "./../models/interfaces/IProfileReport";
import { TopicDAO } from "../dao/TopicDAO";

export class ProfileReportService {
    private _dao: ProfileReportDAO;

    constructor() {
        this._dao = new ProfileReportDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this._dao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    //
    // async entity(id: string) {
    //     try {
    //         let data: any = await this._dao.findById(id);
    //         return Promise.resolve(data);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }

    async update(item) {
        try {
            let newitem: any = {};
            newitem.leaveDate = new Date();
            newitem.account = item.account;
            newitem.updatedBy = item.name;
            newitem.updatedDate = new Date();
            console.log(newitem)
            let data: any = await this._dao.update(item._id, newitem)
            let returnData = {
                message: "Updated Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }


}
