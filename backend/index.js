import Express from "express";
// import { createTables, User } from './db.js';
import cors from "cors"
import {router} from './router/authRouter.js'
import {userRouter} from './router/usersRouter.js'

const app = Express()
app.use(Express.json())
app.use(cors())
app.use('/auth', router)
app.use('/users', userRouter)

// createTables()

app.listen(8000)