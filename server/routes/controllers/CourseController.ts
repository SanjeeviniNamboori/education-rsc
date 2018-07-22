import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { CourseService } from "../../services/CourseService";

export class CourseController {
    private router: Router = Router();

    getRouter(): Router {
        this.router.post("/", async (request: Request, response: Response) => {
            const courseService = new CourseService();
            const result = courseService.retrieve();
            App.Send(request, response, result);
        });

        this.router.put("/", async (request: Request, response: Response) => {
            const item: any = request.body.data;
            const courseService = new CourseService();
            let result = courseService.save(item);
            App.Send(request, response, result);
        });

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const courseService = new CourseService();
            let result = courseService.entity(id);
            App.Send(request, response, result);
        })

        this.router.delete("/:id", async (request: Request, response: Response) => {
            const id: string = request.params.id;
            const courseService = new CourseService();
            let result = courseService.delete(id);
            App.Send(request, response, result);
        })

        this.router.post("/user", async (request: Request, response: Response) => {
            const reqdata = request.body.data;
            const courseService = new CourseService();
            let result = courseService.userSpecific(reqdata);
            App.Send(request, response, result);
        })

        this.router.post("/batch", async (request: Request, response: Response) => {
            const reqdata = request.body.data;
            const courseService = new CourseService();
            let result = courseService.batch(reqdata);
            App.Send(request, response, result);
        })

        return this.router;
    }
}
