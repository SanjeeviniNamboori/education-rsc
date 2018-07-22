import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { AccountService } from "../../services/AccountService";

export class AccountController {

    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async(request: Request, response: Response) => {
            let reqData=request.body;
            const accountService = new AccountService();
            const result = accountService.retrieve(reqData.data);
            App.Send(request, response, result);
            
        });
        this.router.put("/", async(request: Request, response: Response) => {
            console.log(request.body);
            const item: any = request.body.data;
            const accountService = new AccountService();
            let result = accountService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id",async(request: Request,response:Response)=>{
            const id:any=request.params.id;
            const accountService=new AccountService();
            const result = accountService.entity(id);
            App.Send(request, response, result);
        });

        this.router.delete("/:id",async(request:Request,response:Response)=>{
            const id:any=request.params.id;
            const accountService=new AccountService();
            const result = accountService.delete(id);
            App.Send(request, response, result);
        });
        return this.router;
    }
}