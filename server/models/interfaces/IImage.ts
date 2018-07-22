import * as  mongoose from "mongoose";

export interface IImage extends mongoose.Document {
    img: string;
}
