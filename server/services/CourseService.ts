
import { CourseDAO } from "../dao/CourseDAO";
import { ICourse } from "./../models/interfaces/ICourse";
import { ImageDAO } from "../dao/ImageDAO";
import { BatchMemberDAO } from "../dao/BatchMemberDAO";
import { BatchDAO } from "../dao/BatchDAO";

export class CourseService {
    private courseDao: CourseDAO;
    private imageDao: ImageDAO;
    private bmDao: BatchMemberDAO;
    private batchDao: BatchDAO;

    constructor() {
        this.courseDao = new CourseDAO();
        this.imageDao = new ImageDAO();
        this.bmDao = new BatchMemberDAO();
        this.batchDao = new BatchDAO();
    }

    async retrieve() {
        try {
            let data: any = await this.courseDao.retrieve({});
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async entity(id: string) {
        try {
            let data: any = await this.courseDao.findById(id);
            console.log(data);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async imagesave(item: ICourse) {
        let imageData: any = await this.imageDao.save(item.img);
        item.img = item.img._id ? item.img._id : imageData._id;
        let courseData: any = await this.courseDao.save(item);
        let returnData = {
            courseId: courseData._id,
            message: "Saved Successfully"
        }
        return returnData;
    }

    async save(item: ICourse) {
        try {
            let obj: Array<any> = await this.courseDao.retrieve({ name: item.name });
            if ((item._id == null && obj.length > 0)) {
                return Promise.reject({ message: 'Name already exists.' });
            } else if ((item._id != null && obj[0])) {
                if (item._id != obj[0]._id) {
                    return Promise.reject({ message: 'Name already exists.' })
                } else {
                    var returnData = this.imagesave(item);
                }
            } else {
                var returnData = this.imagesave(item);
            }
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = await this.courseDao.findById(id)
            data.status = false;
            let result: any = await this.courseDao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async userSpecific(query: any) {
        try {
            let data: any = await this.bmDao.batchretrieve(query);
            let courses = [];
            data.forEach(element => {
                courses.push(element.batch.course)
            });
            return Promise.resolve(courses);
        } catch (error) {
            return Promise.reject(error)
        }
    }

    async batch(reqData: any) {
        try {
            let data: any = await this.bmDao.batchretrieve(reqData);
            let _id = [];
            data.forEach(function(item) {
                _id.push(item.batch._id)
            })
            let batches: any = await this.batchDao.retrieve({ _id: _id })
            let returnData = [];
            console.log(reqData)
            batches.forEach(item => {
                if (item.course._id == reqData.account.course._id) {
                    returnData.push({name:item.name,_id:item._id})
                }
            });
            return Promise.resolve(returnData)
        } catch (error) {
            return Promise.reject(error);
        }
    }

}
