import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { MenuAccessService } from "../../services/MenuAccessService";

export class MenuAccessController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const menuaccessService = new MenuAccessService();
            const result = menuaccessService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const menuaccessService = new MenuAccessService();
            let result = menuaccessService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const menuaccessService = new MenuAccessService();
            let result = menuaccessService.entity(id);
            App.Send(request, response, result);
        })

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const menuaccessService = new MenuAccessService();
            let result = menuaccessService.delete(id);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
