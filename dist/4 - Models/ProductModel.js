"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProduct = void 0;
const joi_1 = __importDefault(require("joi"));
const ErrorModels_1 = require("./ErrorModels");
const productValidationSchema = joi_1.default.object({
    id: joi_1.default.number().optional().positive().integer(),
    name: joi_1.default.string().required().min(2).max(30),
    price: joi_1.default.number().required().min(1).max(1000000),
    stock: joi_1.default.number().required().min(0).max(1000),
});
const validateProduct = (product) => {
    const isValid = productValidationSchema.validate(product);
    if (isValid.error)
        (0, ErrorModels_1.validationError)(isValid.error.message);
};
exports.validateProduct = validateProduct;
//# sourceMappingURL=ProductModel.js.map