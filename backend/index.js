import Express from "express";
import { createTables, User } from './db.js';
import cors from "cors"
import { register } from './controller/auth.controller.js'
import { login } from './controller/auth.controller.js'

const app = Express()
app.use(Express.json())
app.use(cors())
// createTables()


app.post('/signup', register)

app.post('/login', login)

app.listen(8000)