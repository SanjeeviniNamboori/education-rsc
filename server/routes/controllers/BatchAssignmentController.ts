import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchAssignmentService } from "../../services/BatchAssignmentService";

export class BatchAssignmentController {

    private router: Router = Router();

    getRouter(): Router {

      /**
       * @swagger
       * /batchassignment:
       *   get:
       *     tags:
       *      - Assignment
       *     description:
       *      List of data.
       *     produces:
       *       - application/json
       *     responses:
       *       200:
       *         description: "status:1 is success; status: 0 is failure;"
       */
       this.router.get("/batchassignment", async(req: Request, res: Response)=>{

         const batchAssignmentService = new BatchAssignmentService();
         const result = batchAssignmentService.retrieve();
         App.Send(req, res, result);

       });
       /**
       * @swagger
       * /batchassignment:
       *   put:
       *      tags:
       *      - Assignment
       *      description:
       *       save.
       *      produces:
       *        - application/json
       *      parameters:
       *        - name: body
       *          in: body
       *          schema:
       *            type: object
       *            properties:
       *               data:
       *                   type: object
       *                   properties:
       *                       detail:
       *                           type: string
       *                           example: "node js"
       *                       batchId:
       *                           type: string
       *                           example: "56fvb732"
       *                       txnDate:
       *                           type: Date
       *                           example: 23/01/1989
       *                       passMarks:
       *                           type: number
       *                           example: 35
       *                       topicId:
       *                           type: string
       *                           example: "5322f5cg25"
       *      responses:
       *           200:
       *               description: "status:1 is success; status: 0 is failure;"
       */

   this.router.put("/batchassignment", async(req: Request, res: Response) => {
       console.log(req.body);
       const item: any = req.body.data;
       const batchAssignmentService = new BatchAssignmentService();
       let result = batchAssignmentService.save(item);
       App.Send(req, res, result);
   });

     return this.router;
  }

}
