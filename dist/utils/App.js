"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    static UniqueNumber() {
        var time = new Date().getTime();
        if (this.uniqueId == time) {
            while (new Date().getTime() < 1 + time) {
                ;
            }
            time = new Date().getTime();
            ;
        }
        this.uniqueId = time;
        return time.toString(36).toUpperCase();
    }
    static Send(req, res, promise) {
        var respObj = {};
        promise.then(data => {
            respObj.status = 1;
            respObj.data = data;
            res.jsonp(respObj);
        }).catch(err => {
            console.log(err);
            respObj.status = 0;
            respObj.error = err;
            res.jsonp(respObj);
        });
    }
}
App.uniqueId = 0;
exports.App = App;
//# sourceMappingURL=App.js.map