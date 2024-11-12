import express from 'express'
import { deleteUser, allUsers, oneUser, changePasswordUser, updateProfileImage } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/allUsers', allUsers);
userRouter.get('/:username', oneUser);
userRouter.delete('/delete/:username', deleteUser);
userRouter.patch('/changepassword', changePasswordUser)
userRouter.patch('/updateProfileImage/:username', updateProfileImage);

export { userRouter }