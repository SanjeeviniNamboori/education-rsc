import {LinkDAO} from "../dao/LinkDAO";
import {ILink} from "./../models/interfaces/ILink";
import {TopicDAO} from "../dao/TopicDAO";

export class LinkService {
    private linkDao: LinkDAO;
    private topicDao: TopicDAO;

    constructor() {
        this.linkDao = new LinkDAO();
        this.topicDao = new TopicDAO();
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this.linkDao.retrieve(reqData);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.linkDao.findById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: ILink) {
        try {
            let linkData: any = await this.linkDao.save(item);
            let returnData = {
                _id: item._id ? item._id : linkData._id,
                message: "Saved Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = (await this.linkDao.delete(id))
            let returnData = {
                message: "Link Removed Successfully"
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
