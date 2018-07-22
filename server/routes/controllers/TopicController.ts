import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { TopicService } from "../../services/TopicService";

export class TopicController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const topicService = new TopicService();
            const result = topicService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const topicService = new TopicService();
            let result = topicService.save(item);
            App.Send(request, response, result);
        });
        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const topicService = new TopicService();
            let result = topicService.entity(id);
            App.Send(request, response, result);
        })

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const topicService = new TopicService();
            let result = topicService.delete(id);
            App.Send(request, response, result);
        })
        return this.router;
    }
}
