import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BranchService } from "../../services/BranchService";

export class BranchController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            let reqData = request.body;
            const branchService = new BranchService();
            const result = branchService.retrieve(reqData.data);
            App.Send(request, response, result);

        });
        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const branchService = new BranchService();
            let result = branchService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const branchService = new BranchService();
            const result = branchService.entity(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
