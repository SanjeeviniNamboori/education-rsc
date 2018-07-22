import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchMemberService } from "../../services/BatchMemberService";

export class BatchMemberController {

    private router: Router = Router();

    getRouter(): Router {

        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const bmService = new BatchMemberService();
            const result = bmService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const bmService = new BatchMemberService();
            let result = bmService.save(item.members, item.batch._id);
            App.Send(request, response, result);
        });
        this.router.delete("/:id", async (request: Request, response: Response) => {
            const item: any = request.params.id;
            const bmService = new BatchMemberService();
            let result = bmService.delete(item);
            App.Send(request, response, result);
        });
        return this.router;
    }
}
