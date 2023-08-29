"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appConfig_1 = require("./2 - Utils/appConfig");
const catch_all_1 = require("./3 - Middleware/catch-all");
const routeNotFoundMW_1 = require("./3 - Middleware/routeNotFoundMW");
const products_controllers_1 = __importDefault(require("./6 - Controllers/products-controllers"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use("/api", products_controllers_1.default);
server.use("*", routeNotFoundMW_1.routeNotFoundMW);
server.use(catch_all_1.catchAll);
server.listen(appConfig_1.appConfig.port, () => console.log(`Listening to ${appConfig_1.appConfig.port} on http://${appConfig_1.appConfig.host}:${appConfig_1.appConfig.port}`));
//# sourceMappingURL=app.js.map