import { BatchMemberDAO } from "../dao/BatchMemberDAO";
import { IBatchMember } from "../models/interfaces/IBatchMember";

export class BatchMemberService {
    private _dao: BatchMemberDAO;

    constructor() {
        this._dao = new BatchMemberDAO();
    }

    async retrieve(query) {
        try {
            let returnData = {
                students: [],
                trainers: []
            };
            let bmData: any = await this._dao.retrieve(query);
            bmData.forEach(function (member) {
                switch (member.account.role) {
                    case 'Student':
                        returnData.students.push(member);
                        break;
                    case 'Trainer':
                        returnData.trainers.push(member);
                        break;
                    default: break;
                }
            })
            return Promise.resolve(returnData)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(items: string[], batch: string) {
        try {
            let result = [];
            for (var i = 0; i < items.length; i++) {
                let bmobj = <IBatchMember>{
                    account: { _id: items[i] },
                    batch: { _id: batch }
                }
                let bm: any = await this._dao.save(bmobj);
                result.push(bm._id)
            }
            console.log(result)
            return Promise.resolve(result);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async delete(item: any) {
        try {
            let data: any = await this._dao.delete(item);
            let returnData = {
                message: "Removed successfully"
            }
            return Promise.resolve(returnData)
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
