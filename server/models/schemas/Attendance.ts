import {DataAccess} from "./../../config/DataAccess";
import {IAttendance} from "./../interfaces/IAttendance";

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AttendanceSchema {

    static get schema() {
        var schema = mongoose.Schema({
            fromTime: {
                type: Date,
                required: true
            },
            toTime: {
                type: Date,
                required: true
            },
            updatedBy: {
                type: String,
                required: true
            },
            updatedDate: {
                type: Date,
                required: true
            },
            account: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Account',
                required: true
            }
        });

        return schema;
    }

}
var Attendance = mongooseConnection.model<IAttendance>("Attendance", AttendanceSchema.schema);

export { Attendance };
