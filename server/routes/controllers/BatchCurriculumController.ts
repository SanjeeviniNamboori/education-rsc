import {Router, Request, Response} from "express";
import {App} from "../../utils/App";
import { BatchCurriculumService } from "../../services/BatchCurriculumService";

export class BatchCurriculumController {

    private router : Router = Router();

    getRouter() : Router {
        this.router.post("/", async(request : Request, response : Response) => {
                let reqData = request.body.data;
                const batchCurriculumService = new BatchCurriculumService();
                const result = batchCurriculumService.retrieve(reqData);
                App.Send(request, response, result);
            });

        this.router.put("/", async(request : Request, response : Response) => {
                const item : any = request.body.data;
                const batchCurriculumService = new BatchCurriculumService();
                let result = batchCurriculumService.save(item);
                App.Send(request, response, result);
            });

        // this.router.get("/:id", async(request : Request, response : Response) => {
        //         const id : string = request.params.id;
        //         const batchCurriculumService = new BatchCurriculumService();
        //         let result = batchCurriculumService.entity(id);
        //         App.Send(request, response, result);
        //     });
        // this.router.delete("/:id", async(request : Request, response : Response) => {
        //         const id : string = request.params.id;
        //         const batchCurriculumService = new BatchCurriculumService();
        //         let result = batchCurriculumService.delete(id);
        //         App.Send(request, response, result);
        //     });
            return this.router;
    }
}
