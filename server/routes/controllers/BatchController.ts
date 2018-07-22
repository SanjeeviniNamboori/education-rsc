import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchService } from "../../services/BatchService";
import { BatchMemberService } from "../../services/BatchMemberService";
import { BatchCurriculumService } from "../../services/BatchCurriculumService";

export class BatchController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const batchService = new BatchService();
            const result = batchService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const batchService = new BatchService();
            const bcService = new BatchCurriculumService();
            let result: any = batchService.save(item);
            App.Send(request, response, Promise.resolve(result));
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const batchService = new BatchService();
            let result = batchService.entity(id);
            App.Send(request, response, result);
        })

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const batchService = new BatchService();
            let result = batchService.delete(id);
            App.Send(request, response, result);
        })

        this.router.post("/users", async (request: Request, response: Response) => {
            let reqData: string = request.body.data;
            const batchService = new BatchService();
            let result = batchService.user(reqData);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
