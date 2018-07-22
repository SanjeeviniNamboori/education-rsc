import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AttendanceService } from "../../services/AttendanceService";

export class AttendanceController {

    private router: Router = Router();

    getRouter(): Router {

        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const attendanceService = new AttendanceService();
            const result = attendanceService.retrieve(reqData.data);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const attendanceService = new AttendanceService();
            const result = attendanceService.entity(id);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const attendanceService = new AttendanceService();
            let result = attendanceService.save(item);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const attendanceService = new AttendanceService();
            const result = attendanceService.delete(id);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
