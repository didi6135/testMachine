import express, { NextFunction, Response, Request } from 'express'
import { getAllProductsLogic } from '../5 - Logic/products-logic';


const router = express.Router();

// GET http://localhost:3001/api/products
router.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await getAllProductsLogic();
        res.json(products);
    }
    catch (err) {
        next(err)
    }
})


export default router;
