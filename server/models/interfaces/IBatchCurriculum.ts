import * as  mongoose from "mongoose";

export interface IBatchCurriculum extends mongoose.Document {
    hrs: string;
    batch: any;
    topic: any;
    topicStatus: string;
    fromTime: Date;
    toTime: Date;
    fromDate: Date;
    toDate: Date;
}
