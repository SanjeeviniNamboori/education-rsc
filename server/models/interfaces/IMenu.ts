import * as  mongoose from "mongoose";

export interface IMenu extends mongoose.Document {
  name: string;
  link: string;
  icon: string;
}


