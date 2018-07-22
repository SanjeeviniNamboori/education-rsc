import {DataLoadController} from "./common/DataLoadController";
import {AppDataController} from "./controllers/AppDataController";
import {AccountController} from "./controllers/AccountController";
import { BatchCurriculumController} from "./controllers/BatchCurriculumController";
import {TopicController} from "./controllers/TopicController";
import {CourseController} from "./controllers/CourseController";
import {MenuAccessController} from "./controllers/MenuAccessController";
import {MenuController} from "./controllers/MenuController";
import {LinkController} from "./controllers/LinkController";
import {BranchController} from "./controllers/BranchController";
import {BatchController} from "./controllers/BatchController";
import {BatchTimingController} from "./controllers/BatchTimingController";
import {AttendanceController} from "./controllers/AttendanceController";
import {ProfileReportController} from "./controllers/ProfileReportController";
import {ImageController} from "./controllers/ImageController";
import {BatchMemberController} from "./controllers/BatchMemberController";
import {AuthController} from "./common/AuthController";

export class AppController {
    private router: any;

    registerRoutes(router: any) {
        router.use("/dataload", new DataLoadController().getRouter());
        router.use("/auth", new AuthController().getRouter());
        router.use("/appdata", new AppDataController().getRouter());
        router.use("/account", new AccountController().getRouter())
        router.use("/topic", new TopicController().getRouter());
        router.use("/course", new CourseController().getRouter());
        router.use("/menu", new MenuController().getRouter());
        router.use("/menuaccess", new MenuAccessController().getRouter());
        router.use("/link", new LinkController().getRouter());
        router.use("/branch", new BranchController().getRouter());
        router.use("/batch", new BatchController().getRouter());
        router.use("/batchtiming", new BatchTimingController().getRouter());
        router.use("/batchcurriculum", new BatchCurriculumController().getRouter());
        router.use("/attendance", new AttendanceController().getRouter());
        router.use("/profilereport", new ProfileReportController().getRouter());
        router.use("/image", new ImageController().getRouter());
        router.use("/batchmember", new BatchMemberController().getRouter())
    }
}
