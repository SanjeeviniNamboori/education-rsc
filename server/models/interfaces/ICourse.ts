import * as  mongoose from "mongoose";

export interface ICourse extends mongoose.Document {
    name: string;
    img: any;
    detail: string;
    status: boolean;
}
