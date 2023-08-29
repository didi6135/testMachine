"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeSql = void 0;
const mysql_1 = __importDefault(require("mysql"));
const appConfig_1 = require("./appConfig");
// Create a pool of connection to mysql
const connection = mysql_1.default.createPool({
    host: appConfig_1.appConfig.host,
    user: appConfig_1.appConfig.user,
    password: appConfig_1.appConfig.password,
    database: appConfig_1.appConfig.database
});
// Execute sql query
const executeSql = (sql) => {
    return new Promise((res, rej) => {
        connection.query(sql, (err, result) => {
            if (err) {
                rej(err);
                return;
            }
            res(result);
        });
    });
};
exports.executeSql = executeSql;
//# sourceMappingURL=dal.js.map