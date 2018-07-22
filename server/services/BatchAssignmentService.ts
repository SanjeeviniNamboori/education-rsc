
import {BatchAssignmentDAO} from "../dao/BatchAssignmentDAO";
import {IBatchAssignment}from "./../models/interfaces/IBatchAssignment";

export class BatchAssignmentService {
    private _dao: BatchAssignmentDAO;

    constructor () {
        this._dao = new BatchAssignmentDAO();
    }

    retrieve () {
        return this._dao.retrieve({});
    }

    save( item: IBatchAssignment) {
        return this._dao.save(item);
    }
}
