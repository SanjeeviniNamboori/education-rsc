import * as  mongoose from "mongoose";

export interface ILink extends mongoose.Document {
  topic: any;
  notes: string;
  type:string;
  link:string;
}
