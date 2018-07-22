import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { ProfileReportService } from "../../services/ProfileReportService";

export class ProfileReportController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body;
            const profileReportService = new ProfileReportService();
            const result = profileReportService.retrieve(reqData.data);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const profileReportService = new ProfileReportService();
            let result = profileReportService.update(item);
            App.Send(request, response, result);
        });

        // this.router.get("/:id",async(request: Request,response:Response)=>{
        //     const id:any=request.params.id;
        //     const profileReportService=new ProfileReportService();
        //     const result = profileReportService.entity(id);
        //     App.Send(request, response, result);
        // });

        return this.router;
    }
}
