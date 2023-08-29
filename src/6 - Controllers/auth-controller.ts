import express, { NextFunction, Response, Request } from 'express'


const router = express.Router();

// GET http://localhost:3001/api/products
router.get("/auth/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json();
    }
    catch (err) {
        next(err)
    }
})




export default router;
