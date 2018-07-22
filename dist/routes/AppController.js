"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataLoadController_1 = require("./common/DataLoadController");
const AppDataController_1 = require("./controllers/AppDataController");
const AccountController_1 = require("./controllers/AccountController");
const BatchCurriculumController_1 = require("./controllers/BatchCurriculumController");
const TopicController_1 = require("./controllers/TopicController");
const CourseController_1 = require("./controllers/CourseController");
const MenuAccessController_1 = require("./controllers/MenuAccessController");
const MenuController_1 = require("./controllers/MenuController");
const LinkController_1 = require("./controllers/LinkController");
const BranchController_1 = require("./controllers/BranchController");
const BatchController_1 = require("./controllers/BatchController");
const BatchTimingController_1 = require("./controllers/BatchTimingController");
const AttendanceController_1 = require("./controllers/AttendanceController");
const ProfileReportController_1 = require("./controllers/ProfileReportController");
const ImageController_1 = require("./controllers/ImageController");
const BatchMemberController_1 = require("./controllers/BatchMemberController");
const AuthController_1 = require("./common/AuthController");
class AppController {
    registerRoutes(router) {
        router.use("/dataload", new DataLoadController_1.DataLoadController().getRouter());
        router.use("/auth", new AuthController_1.AuthController().getRouter());
        router.use("/appdata", new AppDataController_1.AppDataController().getRouter());
        router.use("/account", new AccountController_1.AccountController().getRouter());
        router.use("/topic", new TopicController_1.TopicController().getRouter());
        router.use("/course", new CourseController_1.CourseController().getRouter());
        router.use("/menu", new MenuController_1.MenuController().getRouter());
        router.use("/menuaccess", new MenuAccessController_1.MenuAccessController().getRouter());
        router.use("/link", new LinkController_1.LinkController().getRouter());
        router.use("/branch", new BranchController_1.BranchController().getRouter());
        router.use("/batch", new BatchController_1.BatchController().getRouter());
        router.use("/batchtiming", new BatchTimingController_1.BatchTimingController().getRouter());
        router.use("/batchcurriculum", new BatchCurriculumController_1.BatchCurriculumController().getRouter());
        router.use("/attendance", new AttendanceController_1.AttendanceController().getRouter());
        router.use("/profilereport", new ProfileReportController_1.ProfileReportController().getRouter());
        router.use("/image", new ImageController_1.ImageController().getRouter());
        router.use("/batchmember", new BatchMemberController_1.BatchMemberController().getRouter());
    }
}
exports.AppController = AppController;
//# sourceMappingURL=AppController.js.map