
import { TopicDAO } from "../dao/TopicDAO";
import { ITopic } from "./../models/interfaces/ITopic";
import { LinkDAO } from "../dao/LinkDAO";

export class TopicService {
    private topicDao: TopicDAO;

    constructor() {
        this.topicDao = new TopicDAO();
    }

    async retrieve(query) {
        try {
            let data: any = await this.topicDao.retrieve(query);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.topicDao.findById(id);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: any) {
        try {
            let obj: Array<any> = await this.topicDao.retrieve({ name: item.name, type: item.type });
            console.log(obj)
            if ((item._id == null && obj.length > 0)) {
                return Promise.reject({ message: 'Topic already exists.' });
            } else if ((item._id != null && obj[0])) {
                if (item._id != obj[0]._id) {
                    return Promise.reject({ message: 'Topic already exists.' })
                } else {
                    let topicData: any = await this.topicDao.save(item);
                    let returnData = {
                        topicId: topicData._id,
                        message: "Saved Successfully"
                    }
                    return Promise.resolve(returnData);
                }
            } else {
                let topicData: any = await this.topicDao.save(item);
                let returnData = {
                    topicId: topicData._id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = await this.topicDao.findById(id)
            data.status = false;
            console.log(data)
            let result: any = await this.topicDao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
