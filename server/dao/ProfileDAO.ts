import { BaseDAO } from "./../config/BaseDAO";
import { IProfile } from "./../models/interfaces/IProfile";
import {Profile} from "./../models/schemas/Profile";

export class ProfileDAO  extends BaseDAO<IProfile> {
    constructor () {
        super(Profile);
    }
}

Object.seal(ProfileDAO);
