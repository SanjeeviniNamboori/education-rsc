import { BaseDAO } from "./../config/BaseDAO";
import {IMenu } from "./../models/interfaces/IMenu";
import {Menu} from "./../models/schemas/Menu";

export class MenuDAO  extends BaseDAO<IMenu> {
    constructor () {
        super(Menu);
    }
}

Object.seal(MenuDAO);
