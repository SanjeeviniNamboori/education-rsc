import { BaseDAO } from "./../config/BaseDAO";
import { ICourse } from "./../models/interfaces/ICourse";
import { Course } from "./../models/schemas/Course";

export class CourseDAO extends BaseDAO<ICourse> {
    constructor() {
        super(Course);
    }

    save(item: ICourse) {
        return super.save(item);
    }
    
    retrieve(query: object) {
        return super.retrieve(query);
    }
}

Object.seal(CourseDAO);
