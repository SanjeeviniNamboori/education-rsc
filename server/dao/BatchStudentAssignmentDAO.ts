import { BaseDAO } from "./../config/BaseDAO";
import {IBatchStudentAssignment}from "./../models/interfaces/IBatchStudentAssignment";
import {BatchStudentAssignment} from "./../models/schemas/BatchStudentAssignment";

export class BatchStudentAssignmentDAO  extends BaseDAO<IBatchStudentAssignment> {
    constructor () {
        super(BatchStudentAssignment);
    }
}

Object.seal(BatchStudentAssignmentDAO);
