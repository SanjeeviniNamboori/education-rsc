
import { ImageDAO } from "../dao/ImageDAO";
import { IImage } from "./../models/interfaces/IImage";


export class ImageService {
    private imageDao: ImageDAO;

    constructor() {
        this.imageDao = new ImageDAO();
    }
    async entity(id: string) {
        try {
            let data: any = await this.imageDao.findById(id);
            let returnData: any = data.img;
            return Promise.resolve(returnData);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    // async save(item: IImage) {
    //     try {
    //         let imageData: any = await this.imageDao.save(item);
    //         let returnData = {
    //             _id: item._id ? item._id : imageData._id,
    //             message: "Saved Successfully"
    //         }
    //         return Promise.resolve(returnData);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }
}
