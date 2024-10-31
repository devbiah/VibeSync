import express from 'express'
import { deleteUser, allUsers } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/users', allUsers);
userRouter.delete('/users/:id', deleteUser);

export { userRouter }