
import { AppDataDAO } from "../dao/AppDataDAO";
import { IAppData } from "./../models/interfaces/IAppData";


export class AppDataService {
    private _dao: AppDataDAO;

    constructor() {
        this._dao = new AppDataDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this._dao.retrieve(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this._dao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IAppData) {
        try {
            console.log(item)
            let obj: Array<any> = await this._dao.retrieve({ code: item.code, key: item.key });
            console.log(obj)
            if (item._id == null && obj.length > 0) {
                return Promise.reject({ message: 'Code already exists' });
            } else {
                let data: any = await this._dao.save(item);
                return Promise.resolve(data);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = await this._dao.findById(id)
            data.status = false;
            console.log(data)
            let result: any = await this._dao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
