"use strict";
// Get all products:
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductsLogic = void 0;
const dal_1 = require("../2 - Utils/dal");
const getAllProductsLogic = () => __awaiter(void 0, void 0, void 0, function* () {
    // create the query
    const sql = `
    SELECT ProductID AS id,
    ProductName AS name,
    UnitPrice AS price,
    UnitsInStock as stock
    FROM products
    `;
    // Execute the query
    const products = yield (0, dal_1.executeSql)(sql);
    // return the products
    return products;
});
exports.getAllProductsLogic = getAllProductsLogic;
//# sourceMappingURL=products-logic.js.map