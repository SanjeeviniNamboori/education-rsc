import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { LinkService } from "../../services/LinkService";

export class LinkController {
    private router: Router = Router();

    getRouter(): Router {

        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const linkService = new LinkService();
            const result = linkService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const linkService = new LinkService();
            const result = linkService.entity(id);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const linkService = new LinkService();
            let result = linkService.save(item);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const linkService = new LinkService();
            const result = linkService.delete(id);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
