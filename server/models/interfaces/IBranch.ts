import * as  mongoose from "mongoose";

export interface IBranch extends mongoose.Document {
    _id: string;
    name: string;
    loc: string;
    address: any;
}
