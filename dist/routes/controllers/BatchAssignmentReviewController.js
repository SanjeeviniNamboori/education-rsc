"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const App_1 = require("../../utils/App");
const BatchAssignmentReviewService_1 = require("../../services/BatchAssignmentReviewService");
class BatchAssignmentReviewController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
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
        this.router.get("/bareview", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const batchAssignmentReviewService = new BatchAssignmentReviewService_1.BatchAssignmentReviewService();
            const result = batchAssignmentReviewService.retrieve();
            App_1.App.Send(req, res, result);
        }));
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
        this.router.put("/bareview", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const item = req.body.data;
            const batchAssignmentReviewService = new BatchAssignmentReviewService_1.BatchAssignmentReviewService();
            let result = batchAssignmentReviewService.save(item);
            App_1.App.Send(req, res, result);
        }));
        return this.router;
    }
}
exports.BatchAssignmentReviewController = BatchAssignmentReviewController;
//# sourceMappingURL=BatchAssignmentReviewController.js.map