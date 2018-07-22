import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AppDataService } from "../../services/AppDataService";

export class AppDataController {

    private router: Router = Router();

    getRouter(): Router {


        this.router.post("/", async (request: Request, response: Response) => {
            //const authors = await Author.find({}).lean().exec();
            let reqData = request.body;
            console.log(reqData);
            const appDataService = new AppDataService();
            const result = appDataService.retrieve(reqData.data);
            App.Send(request, response, result);

        });


        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const appDataService = new AppDataService();
            let result = appDataService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            console.log(id);
            const appDataService = new AppDataService();
            let result = appDataService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const appDataService = new AppDataService();
            let result = appDataService.delete(id);
            App.Send(request, response, result);
        });
        return this.router;
    }
}
