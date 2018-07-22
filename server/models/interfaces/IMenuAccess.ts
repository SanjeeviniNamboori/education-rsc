import * as  mongoose from "mongoose";

export interface IMenuAccess extends mongoose.Document {
  role: string;
  menu: any;
  status: boolean;
}


