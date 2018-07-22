import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchTimingService } from "../../services/BatchTimingService";

export class BatchTimingController {
    private router: Router = Router();

    getRouter(): Router {

        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const batchTimingService = new BatchTimingService();
            const result = batchTimingService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const batchTimingService = new BatchTimingService();
            const result = batchTimingService.entity(id);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            item.inTime = new Date();
            item.outTime = new Date();
            const batchTimingService = new BatchTimingService();
            let result = batchTimingService.save(item);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
