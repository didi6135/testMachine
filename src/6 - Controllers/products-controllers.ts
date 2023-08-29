import express, { NextFunction, Response, Request } from 'express'
import pool from '../2 - Utils/dal';
import { checkItzik } from '../3 - Middleware/itzikMW';


const router = express.Router();

// GET http://localhost:3001/api/products
router.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    }
    catch (err) {
        next(err)
    }
})




export default router;
