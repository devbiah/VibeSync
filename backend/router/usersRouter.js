import express from 'express'
import { deleteUser, allUsers, oneUser, changePasswordUser, updateProfileImage } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.get('/allUsers', allUsers);
userRouter.get('/:username', oneUser);
userRouter.delete('/delete/:username', deleteUser);
userRouter.patch('/changepassword/:username', changePasswordUser)
userRouter.post('/updateProfileImage/:username', updateProfileImage);

export { userRouter }