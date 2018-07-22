import * as  mongoose from "mongoose";

export interface IBatchForum extends mongoose.Document {
    query: string;
    updatedBy: string;
    updatedDate: Date;
    status: boolean;
    batch: any;
}
