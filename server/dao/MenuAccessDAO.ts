import { BaseDAO } from "./../config/BaseDAO";
import {IMenuAccess}from "./../models/interfaces/IMenuAccess";
import {MenuAccess} from "./../models/schemas/MenuAccess";

export class MenuAccessDAO  extends BaseDAO<IMenuAccess> {
    constructor () {
        super(MenuAccess);
    }

    save(item:IMenuAccess) {
      item.menu = item.menu._id;
      return super.save(item);
    }

    retrieve (query: object){
      return super.retrieve(query).populate("menu");
    }

    findById(id: string) {
        return super.findById(id).populate("menu");
    }
}

Object.seal(MenuAccessDAO);
