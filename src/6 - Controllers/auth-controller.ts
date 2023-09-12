import express, { NextFunction, Response, Request } from 'express'
import { createLogicalNot } from 'typescript';
import { CredentialsModel, UserModel } from '../4 - Models/userModel';
import { login, signUp } from '../5 - Logic/auth-logic';


const router = express.Router();

// GET http://localhost:3001/api/products
router.post("/auth/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const credentials = req.body as CredentialsModel
        const checkLogin = await login(credentials)
        res.status(201).json(checkLogin);
    }
    catch (err) {
        next(err)
    }
})

router.post("/auth/signup", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.body as UserModel; // Replace UserModel with the appropriate type
        const added = await signUp(user);
        res.status(201).json(added); 
    } catch (err) {
        next(err);
    }
});




export default router;
