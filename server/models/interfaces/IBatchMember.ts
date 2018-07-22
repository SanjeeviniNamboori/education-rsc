import * as  mongoose from "mongoose";

export interface IBatchMember extends mongoose.Document {
    account: any;
    batch: any;
}
