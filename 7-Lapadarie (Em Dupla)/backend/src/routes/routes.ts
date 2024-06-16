import { Router, Request, Response } from 'express';
import { createUser, deleteAllUsers, deleteUser, listUsers } from '../controller/userController';
import { validateUser } from '../middleware/validateUser';
import { UserCreateInputSchema } from '../../prisma/generated/zod';
import cors from 'cors'
import bodyParser from 'body-parser';


export const userRouter = Router();
userRouter.use(cors())
userRouter.use(bodyParser.json());

userRouter.get('/', listUsers);




userRouter.post('/', validateUser(UserCreateInputSchema), createUser);
userRouter.delete('/deleteAllUsers', deleteAllUsers)



userRouter.delete('/', deleteUser);
