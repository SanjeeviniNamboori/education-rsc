
import {MenuDAO} from "../dao/MenuDAO";
import {IMenu}from "../models/interfaces/IMenu";


export class MenuService {

    private _menuDao: MenuDAO;

    constructor() {
        this._menuDao = new MenuDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this._menuDao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async entity(id: string) {
        try {
            let data: any = await this._menuDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IMenu) {
        try {
            let menuData: any = await this._menuDao.save(item);
            let returnData = {
                _id: item._id ? item._id : menuData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {

            let result: any = await this._menuDao.delete(id);
            return Promise.resolve({message:"Menu Deleted"});
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
