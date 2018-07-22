import * as  mongoose from "mongoose";

export interface IBatchForumComment extends mongoose.Document {
    comment: string;
    updatedBy: string;
    updatedDate: Date;
    status: boolean;
    batchForum: any;
}
