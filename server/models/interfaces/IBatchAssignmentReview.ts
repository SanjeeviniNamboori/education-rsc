import * as  mongoose from "mongoose";

export interface IBatchAssignmentReview extends mongoose.Document {
  batchStudentAssignmentId  : string;
	questionId                : string;
	YourAns                   : string;
	isRightAns                : boolean;
}

