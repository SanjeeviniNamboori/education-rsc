
import * as  mongoose from "mongoose";
export interface IQuestion extends mongoose.Document {
    course: string;
    topicId: string;
    detail: string;
    question: string;
    isMultiAns: boolean;
    optionA: string;
    checkA: boolean;
    optionB: string;
    checkB: boolean;
    optionC: string;
    checkC: boolean;
    optionD: string;
    checkD: boolean;
    status: boolean;
}
