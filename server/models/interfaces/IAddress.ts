import * as  mongoose from "mongoose";

export interface IAddress extends mongoose.Document {
  lane: string;
  street: string;
  area: string;
  city:string;
  state:string;
  zipcode:number;
  country:string;
}
