import * as  mongoose from "mongoose";

export interface IAppData extends mongoose.Document {
  key: string;
  code: string;
  name: string;
  status: boolean;
}


