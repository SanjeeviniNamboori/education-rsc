import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { DataLoadService } from "../../services/common/DataLoadService";

export class DataLoadController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.get("/:category", async (request: Request, response: Response) => {
            const category = request.params.category;
            const service = new DataLoadService();
            let result = null;
            switch (category) {
                case 'codes': result = service.codes(); break;
                case 'roles': result = service.roles(); break;
                case 'branches': result = service.branchList(); break;
                case 'batchtypes': result = service.batchTypes(); break;
                case 'linktypes': result = service.linkTypes(); break;
                case 'studentlist': result = service.studentList(); break;
                case 'trainerlist': result = service.trainerList(); break;
                case 'timings': result = service.timings(); break;
                case 'courselist': result = service.courseList(); break;
                case 'topicstatus': result = service.topicStatus(); break;
                case 'tracker': result = service.tracker();break;
                case 'default': result = null;
            }
            App.Send(request, response, result);
        });

        this.router.get("/:category/:branch", async(request: Request, response: Response) => {
            const category = request.params.category;
            const branch = request.params.branch;
            const service = new DataLoadService();
            let result = null;
            switch (category) {
                case 'studentlist': result = service.branchStudentlist(branch); break;
                case 'trainerlist': result = service.branchTrainerlist(branch); break;
                case 'default': result = null;
            }
            App.Send(request, response, result);
        })
        return this.router;
    }
}
