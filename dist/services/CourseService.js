"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CourseDAO_1 = require("../dao/CourseDAO");
const ImageDAO_1 = require("../dao/ImageDAO");
const BatchMemberDAO_1 = require("../dao/BatchMemberDAO");
const BatchDAO_1 = require("../dao/BatchDAO");
class CourseService {
    constructor() {
        this.courseDao = new CourseDAO_1.CourseDAO();
        this.imageDao = new ImageDAO_1.ImageDAO();
        this.bmDao = new BatchMemberDAO_1.BatchMemberDAO();
        this.batchDao = new BatchDAO_1.BatchDAO();
    }
    retrieve() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.courseDao.retrieve({});
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    entity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.courseDao.findById(id);
                console.log(data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    imagesave(item) {
        return __awaiter(this, void 0, void 0, function* () {
            let imageData = yield this.imageDao.save(item.img);
            item.img = item.img._id ? item.img._id : imageData._id;
            let courseData = yield this.courseDao.save(item);
            let returnData = {
                courseId: courseData._id,
                message: "Saved Successfully"
            };
            return returnData;
        });
    }
    save(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let obj = yield this.courseDao.retrieve({ name: item.name });
                if ((item._id == null && obj.length > 0)) {
                    return Promise.reject({ message: 'Name already exists.' });
                }
                else if ((item._id != null && obj[0])) {
                    if (item._id != obj[0]._id) {
                        return Promise.reject({ message: 'Name already exists.' });
                    }
                    else {
                        var returnData = this.imagesave(item);
                    }
                }
                else {
                    var returnData = this.imagesave(item);
                }
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.courseDao.findById(id);
                data.status = false;
                let result = yield this.courseDao.update(id, data);
                return Promise.resolve(data);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    userSpecific(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.bmDao.batchretrieve(query);
                let courses = [];
                data.forEach(element => {
                    courses.push(element.batch.course);
                });
                return Promise.resolve(courses);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
    batch(reqData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield this.bmDao.batchretrieve(reqData);
                let _id = [];
                data.forEach(function (item) {
                    _id.push(item.batch._id);
                });
                let batches = yield this.batchDao.retrieve({ _id: _id });
                let returnData = [];
                console.log(reqData);
                batches.forEach(item => {
                    if (item.course._id == reqData.account.course._id) {
                        returnData.push({ name: item.name, _id: item._id });
                    }
                });
                return Promise.resolve(returnData);
            }
            catch (error) {
                return Promise.reject(error);
            }
        });
    }
}
exports.CourseService = CourseService;
//# sourceMappingURL=CourseService.js.map