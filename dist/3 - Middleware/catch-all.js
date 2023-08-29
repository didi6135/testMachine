"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchAll = void 0;
const logger_1 = require("../2 - Utils/logger");
const catchAll = (err, req, res, next) => {
    // log the error on the console
    console.log(err);
    // Log the error to an error log file
    (0, logger_1.logger)(err.message);
    // Send back the error to the front
    res.status(err.status || 500).send(err.message);
};
exports.catchAll = catchAll;
//# sourceMappingURL=catch-all.js.map