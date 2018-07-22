import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { MenuService } from "../../services/MenuService";

export class MenuController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body.data;
            const menuService = new MenuService();
            const result = menuService.retrieve(reqData);
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const menuService = new MenuService();
            let result = menuService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const menuService = new MenuService();
            let result = menuService.entity(id);
            App.Send(request, response, result);
        })

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const menuService = new MenuService();
            let result = menuService.delete(id);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
