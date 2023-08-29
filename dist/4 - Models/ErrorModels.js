"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationError = exports.RouteNotFoundError = void 0;
const RouteNotFoundError = (route) => {
    const error = { msg: `Route  ${route} not exists`, status: 404 };
    return error;
};
exports.RouteNotFoundError = RouteNotFoundError;
const validationError = (msg) => {
    const error = { msg, status: 401 };
    throw error;
};
exports.validationError = validationError;
//# sourceMappingURL=ErrorModels.js.map