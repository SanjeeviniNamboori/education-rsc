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
const BatchAssignmentService_1 = require("../../services/BatchAssignmentService");
class BatchAssignmentController {
    constructor() {
        this.router = express_1.Router();
    }
    getRouter() {
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
        this.router.get("/batchassignment", (req, res) => __awaiter(this, void 0, void 0, function* () {
            const batchAssignmentService = new BatchAssignmentService_1.BatchAssignmentService();
            const result = batchAssignmentService.retrieve();
            App_1.App.Send(req, res, result);
        }));
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
        this.router.put("/batchassignment", (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const item = req.body.data;
            const batchAssignmentService = new BatchAssignmentService_1.BatchAssignmentService();
            let result = batchAssignmentService.save(item);
            App_1.App.Send(req, res, result);
        }));
        return this.router;
    }
}
exports.BatchAssignmentController = BatchAssignmentController;
//# sourceMappingURL=BatchAssignmentController.js.map