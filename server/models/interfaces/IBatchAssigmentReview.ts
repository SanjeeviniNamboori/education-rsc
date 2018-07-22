import mongoose = require("mongoose");

interface IBatchAssignmentReview extends mongoose.Document {
  batchStudentAssignmentId  : string;
	questionId                : string;
	YourAns                   : string;
	isRightAns                : boolean;
}

export = IBatchAssignmentReview;
