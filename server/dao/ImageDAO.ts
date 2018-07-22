import { BaseDAO } from "./../config/BaseDAO";
import { IImage } from "./../models/interfaces/IImage";
import { Image } from "./../models/schemas/Image";

export class ImageDAO extends BaseDAO<IImage> {
    constructor() {
        super(Image);
    }
    save(item: IImage) {
        return super.save(item);
    }
    retrieve(query: object) {
        return super.retrieve(query);
    }
    findById(id: string) {
        return super.findById(id);
    }

}

Object.seal(Image);
