import { BaseDAO } from "./../config/BaseDAO";
import {IQuestion} from "./../models/interfaces/IQuestion";
import {Question} from "./../models/schemas/Question";

export class QuestionDAO  extends BaseDAO<IQuestion> {
    constructor () {
        super(Question);
    }
}

Object.seal(QuestionDAO);
