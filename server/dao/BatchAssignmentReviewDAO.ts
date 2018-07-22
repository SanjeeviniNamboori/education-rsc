import { BaseDAO } from "./../config/BaseDAO";
import {IBatchAssignmentReview} from "./../models/interfaces/IBatchAssignmentReview";
import {BatchAssignmentReview} from "./../models/schemas/BatchAssignmentReview";

export class BatchAssignmentReviewDAO  extends BaseDAO<IBatchAssignmentReview> {
    constructor () {
        super(BatchAssignmentReview);
    }
}

Object.seal(BatchAssignmentReviewDAO);
