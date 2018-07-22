import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { ImageService } from "../../services/ImageService";

export class ImageController {

    private router: Router = Router();

    getRouter(): Router {

        this.router.get("/:id", async (request: Request, response: Response) => {
            const id: any = request.params.id;
            const imageService = new ImageService();
            const result = imageService.entity(id);
            App.Send(request, response, result);
        });

        return this.router;
    }
}
