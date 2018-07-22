import * as  mongoose from "mongoose";

export interface IProfileReport extends mongoose.Document {
    joinDate: Date;
    leaveDate: Date;
    account: any;
    updatedBy: string;
    updatedDate: Date;
}
