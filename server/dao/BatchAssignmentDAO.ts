import { BaseDAO } from './../config/BaseDAO';
import {IBatchAssignment} from "./../models/interfaces/IBatchAssignment";
import {BatchAssignment} from "./../models/schemas/BatchAssignment";

export class BatchAssignmentDAO  extends BaseDAO<IBatchAssignment> {
    constructor () {
        super(BatchAssignment);
    }
}

Object.seal(BatchAssignmentDAO);
