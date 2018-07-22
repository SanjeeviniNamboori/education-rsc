import { BaseDAO } from "./../config/BaseDAO";
import {IAppData} from "./../models/interfaces/IAppData";
import { AppData } from "./../models/schemas/AppData";

export class AppDataDAO  extends BaseDAO<IAppData> {
    constructor () {
        super(AppData);
    }
}

Object.seal(AppDataDAO);
