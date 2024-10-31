import express from 'express'
import { deleteUser, allUsers, oneUser } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/allUsers', allUsers);
userRouter.get('/:username', oneUser);
userRouter.delete('/delete/:username', deleteUser);

export { userRouter }