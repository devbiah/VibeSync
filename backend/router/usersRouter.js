import express from 'express'
import { deleteUser, allUsers, oneUser, changePasswordUser } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/allUsers', allUsers);
userRouter.get('/:username', oneUser);
userRouter.delete('/delete/:username', deleteUser);
userRouter.patch('/changepassword', changePasswordUser)

export { userRouter }