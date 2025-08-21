"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusInApp = exports.Status = exports.Channels = void 0;
var Channels;
(function (Channels) {
    Channels["EMAIL"] = "EMAIL";
    Channels["PUSH"] = "PUSH";
    Channels["IN_APP"] = "IN_APP";
})(Channels || (exports.Channels = Channels = {}));
var Status;
(function (Status) {
    Status["SENT"] = "SENT";
    Status["FAILED"] = "FAILED";
    Status["PENDING"] = "PENDING";
})(Status || (exports.Status = Status = {}));
var StatusInApp;
(function (StatusInApp) {
    StatusInApp["READ"] = "READ";
    StatusInApp["UNREAD"] = "UNREAD";
})(StatusInApp || (exports.StatusInApp = StatusInApp = {}));
