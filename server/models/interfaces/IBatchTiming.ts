import * as  mongoose from "mongoose";

export interface IBatchTiming extends mongoose.Document {
  inTime: Date;
  OutTime: Date;
  batch:any;
}
