import { Router, Request, Response } from "express";
import { App } from "../../utils/App";
import { BatchAssignmentReviewService } from "../../services/BatchAssignmentReviewService";

export class BatchAssignmentReviewController {

    private router: Router = Router();

    getRouter(): Router {

      /**
       * @swagger
       * /bareview:
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
       this.router.get("/bareview", async(req: Request, res: Response)=>{

         const batchAssignmentReviewService = new BatchAssignmentReviewService();
         const result = batchAssignmentReviewService.retrieve();
         App.Send(req, res, result);

       });
       /**
       * @swagger
       * /bareview:
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
       *                       batchStudentAssignmentId:
       *                           type: string
       *                           example: "5bg6323vi"
       *                       questionId:
       *                           type: string
       *                           example: "56fvb732"
       *                       YourAns:
       *                           type: string
       *                           example: "node is run time env"
       *                       isRightAns:
       *                           type: boolean
       *                           example: true
       *      responses:
       *           200:
       *               description: "status:1 is success; status: 0 is failure;"
       */

   this.router.put("/bareview", async(req: Request, res: Response) => {
       console.log(req.body);
       const item: any = req.body.data;
       const batchAssignmentReviewService = new BatchAssignmentReviewService();
       let result = batchAssignmentReviewService.save(item);
       App.Send(req, res, result);
   });

     return this.router;
  }

}
