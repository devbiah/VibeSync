import Express from "express";
import { createTables, User } from './db.js';
import bcryptjs from "bcryptjs"

const app = Express()
app.use(Express.json())
// createTables()

app.post('/register', async (req, res) => {
    const { username, email, password, birthdate } = req.body
    if (!username || !email || !password || !birthdate) {
        res.send('You need to fill all the fields.')
        return
    }
    const existUser = await User.findOne({ where: { email: email } })
    if (existUser) {
        res.send('User alredy exists.')
        return
    }

    const passCrypto = bcryptjs.hashSync(password, 10)
    const createdUser = await User.create({ username, email, password: passCrypto, birthdate })
    //verificar se o usuario existe no banco de dados
    //encriptar a senha do usuario
    //salvar o usuario no banco de dados
    res.send('OK, user created.')
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.send('You need to fill all the fields.')
        return
    }
    const existUser = await User.findOne({ where: { email: email } })
    if (!existUser) {
        res.send('User alredy exists.')
        return
    }
    const validPass = bcryptjs.compareSync(password, existUser.password)
    if(!validPass){
        res.send('Invalid Password')
        return
    }
    //verificar se o usuario existe no banco de dados
    // comparar a senha do usuario com a senha salva no banco
    // criar um token de autenticação para este usuario
    //retornar a mensagem com o token
    res.send('OK, User Logged.')
}
)

app.listen(8000)