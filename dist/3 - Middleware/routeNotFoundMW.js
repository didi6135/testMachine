"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFoundMW = void 0;
const ErrorModels_1 = require("../4 - Models/ErrorModels");
const routeNotFoundMW = (req, res, next) => {
    const err = (0, ErrorModels_1.RouteNotFoundError)(req.originalUrl);
    next(err);
};
exports.routeNotFoundMW = routeNotFoundMW;
//# sourceMappingURL=routeNotFoundMW.js.map