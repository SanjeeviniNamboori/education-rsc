
import * as  mongoose from "mongoose";

export interface IBatchAssignment extends mongoose.Document {
    detail: string
    batchId: string
    txnDate: Date
    passMarks: number
    topicId: string
    status: boolean
}
