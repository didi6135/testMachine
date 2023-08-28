import Joi from 'joi';
import { validationError } from './ErrorModels';

export type ProductType = {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const productValidationSchema = Joi.object({
    id: Joi.number().optional().positive().integer(),
    name: Joi.string().required().min(2).max(30),
    price: Joi.number().required().min(1).max(1000000),
    stock: Joi.number().required().min(0).max(1000),
});

export const validateProduct = (product: ProductType) => {
    const isValid = productValidationSchema.validate(product);
    if(isValid.error) validationError(isValid.error.message)
}