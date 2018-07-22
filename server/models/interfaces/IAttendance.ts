import * as  mongoose from "mongoose";

export interface IAttendance extends mongoose.Document {
  fromTime: Date;
  toTime: Date;
  updatedBy: string;
  updatedDate: Date;
  account: any;
}
