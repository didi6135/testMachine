"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_logic_1 = require("../5 - Logic/products-logic");
const router = express_1.default.Router();
// GET http://localhost:3001/api/products
router.get("/products", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield (0, products_logic_1.getAllProductsLogic)();
        res.json(products);
    }
    catch (err) {
        next(err);
    }
}));
exports.default = router;
//# sourceMappingURL=products-controllers.js.map