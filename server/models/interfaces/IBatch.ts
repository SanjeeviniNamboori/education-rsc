import * as  mongoose from "mongoose";

export interface IBatch extends mongoose.Document {
    name: string;
    batchType: string;
    status: boolean;
    course: any;
    branch: any;
    fromTime: string;
    toTime: string;
    fromDate: string;
    toDate: string;
}
