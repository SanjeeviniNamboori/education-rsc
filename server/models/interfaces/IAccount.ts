import * as  mongoose from "mongoose";

export interface IAccount extends mongoose.Document {
  password: string;
  role: string;
  profile: any;
  status: boolean;
  branch: any;
}
