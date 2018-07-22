import * as  mongoose from "mongoose";

export interface IBatchStudentAssignment extends mongoose.Document {
  batchAssignmentId   : string;
	userId              : string;
	marks               : number;
	status              : string;
	txnDate             : Date;
}

