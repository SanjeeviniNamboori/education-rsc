import { BaseDAO } from "./../config/BaseDAO";
import {ILink}from "./../models/interfaces/ILink";
import {Link} from "./../models/schemas/Link";

export class LinkDAO  extends BaseDAO<ILink> {
    constructor () {
        super(Link);
    }
    save(item: ILink)  {
        item.topic = item.topic._id;
        return super.save(item);
    }
    retrieve (query: object) {
        return super.retrieve(query).populate('topic');
    }
    findById(id: string) {
        return super.findById(id).populate("topic");
    }
}

Object.seal(LinkDAO);
