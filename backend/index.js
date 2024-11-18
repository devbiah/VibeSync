import Express from "express";
// import { createTables, User,Artist, Album, Music } from './db.js';
import cors from "cors"
import {router} from './router/authRouter.js'
import {userRouter} from './router/usersRouter.js'
import { artistRouter } from "./router/artistRouter.js";

const app = Express()
app.use(Express.json())
app.use(cors())
app.use('/auth', router)
app.use('/users', userRouter)
app.use('/artist', artistRouter)

// createTables()

app.listen(8000)