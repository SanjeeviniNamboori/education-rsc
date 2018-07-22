
import { MenuAccessDAO } from "../dao/MenuAccessDAO";
import { MenuDAO } from "../dao/MenuDAO";
import { IMenuAccess } from "./../models/interfaces/IMenuAccess";
import { IMenu } from "../models/interfaces/IMenu";


export class MenuAccessService {
    private _menuAccessDao: MenuAccessDAO;
    private _menuDao: MenuDAO;

    constructor() {
        this._menuAccessDao = new MenuAccessDAO();
        this._menuDao = new MenuDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this._menuAccessDao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async entity(id: string) {
        try {
            let data: any = await this._menuAccessDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IMenuAccess) {
        try {
            let count = 0;
            for (let i = 0; i < item.menu.length; i++) {
                let newobj = <IMenuAccess>{
                    "role": item.role,
                    "menu": item.menu[i],
                    "status": item.status
                }
                let maCheck: any = await this._menuAccessDao.retrieve(newobj);
                if (maCheck.length == 0) {
                    let menuaccessData: any = await this._menuAccessDao.save(newobj);
                    count++;
                }
            }
            return Promise.resolve({ message: count + " link(s) added to " + item.role });
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = await this._menuAccessDao.findById(id)
            data.status = false;
            console.log(data)
            let result: any = await this._menuAccessDao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
