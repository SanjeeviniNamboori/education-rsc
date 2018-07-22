import * as  mongoose from "mongoose";

export interface ITopic extends mongoose.Document {
    name: string;
    detail: string;
    course: any;
    status: boolean;
}
