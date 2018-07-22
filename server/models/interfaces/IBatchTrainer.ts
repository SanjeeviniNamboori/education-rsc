import * as  mongoose from "mongoose";

export interface IBatchTrainer extends mongoose.Document {
  
  batchId: string;
  trainerId: string;
 
}

