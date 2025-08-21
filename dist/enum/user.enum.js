"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusUser = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["USER"] = "USER";
})(UserRole || (exports.UserRole = UserRole = {}));
var StatusUser;
(function (StatusUser) {
    StatusUser["ACTIVE"] = "ACTIVE";
    StatusUser["PENDING"] = "PENDING";
    StatusUser["BANNED"] = "BANNED";
})(StatusUser || (exports.StatusUser = StatusUser = {}));
