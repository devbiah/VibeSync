import Express from "express";
import { createTables, User } from './db.js';

const app = Express()
app.use(Express.json())
createTables()

app.post('/register', async (req, res) => {
    const {username, email, password, birthdate} = req.body
    if (!username || !email || !password || !birthdate){
        res.send('You need to fill all fields.')
        return
    }
    const teste = await User.create(req.body)
    //verificar se o usuario existe no banco de dados
    //encriptar a senha do usuario
    //salvar o usuario no banco de dados
    res.send('Created User')
})

app.post('/login', (req, res) => {
    const {email, senha} = req.body
    if (!email || !senha){
        res.send('You need to fill the fields')
        return
    }
    //verificar se o usuario existe no banco de dados
    // comparar a senha do usuario com a senha salva no banco
    // criar um token de autenticação para este usuario
    //retornar a mensagem com o token
    res.send('User logged in')
})

app.listen(8000)