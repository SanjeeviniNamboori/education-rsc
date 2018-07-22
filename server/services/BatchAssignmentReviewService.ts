
import {BatchAssignmentReviewDAO}from "../dao/BatchAssignmentReviewDAO";
import {IBatchAssignmentReview} from "./../models/interfaces/IBatchAssignmentReview";



export class BatchAssignmentReviewService {
    private _dao: BatchAssignmentReviewDAO;

    constructor () {
        this._dao = new BatchAssignmentReviewDAO();
    }

    retrieve () {
        return this._dao.retrieve({});
    }

    save( item: IBatchAssignmentReview) {
        return this._dao.save(item);
    }
}
