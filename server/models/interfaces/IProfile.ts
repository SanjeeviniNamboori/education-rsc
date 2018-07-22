import * as  mongoose from "mongoose";

export interface IProfile extends mongoose.Document {
    name: string;
    mobile: string;
    email: string;
    address: any;
}
