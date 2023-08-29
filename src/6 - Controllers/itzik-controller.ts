import express, { NextFunction, Response, Request } from 'express'
import { createLogicalNot } from 'typescript';
import { CredentialsModel, UserModel } from '../4 - Models/userModel';
import { login, signUp } from '../5 - Logic/auth-logic';


const router = express.Router();

// GET http://localhost:3001/api/products
router.post('http://localhost:3025', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const credentials = req.body as CredentialsModel
        const checkLogin = await login(credentials)
        res.status(201).json(checkLogin);
    }
    catch (err) {
        next(err)
    }
})




export default router;
