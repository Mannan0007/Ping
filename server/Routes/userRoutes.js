import express from 'express';
import { getPeople, LoginUser, RegisterUser } from "../Controllers/userController.js";
import { sendEmail } from '../Controllers/mailController.js';

const userRouter = express.Router();

userRouter.post('/register', RegisterUser);
userRouter.post('/login', LoginUser);

userRouter.post('/verify', sendEmail);

userRouter.get('/users', getPeople);
export default userRouter;