import bcryptjs from "bcryptjs"
import { User } from "../db.js"
import jsonwebtoken from "jsonwebtoken"

const register = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.send('You need to fill all the fields.')
        return
    }
    const existUser = await User.findOne({ where: { email: email } })
    if (existUser) {
        res.send('User alredy exists.')
        return
    }

    const passCrypto = bcryptjs.hashSync(password, 10)
    const createdUser = await User.create({ username, email, password: passCrypto })
    res.send('OK, user created.')
}

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        res.send('You need to fill all the fields.')
        return
    }
    const userExist = await User.findOne({ where: { username: username } })
    if (!userExist) {
        res.send('User does not exist.')
        return
    }
    const validPass = bcryptjs.compareSync(password, userExist.password)
    if (!validPass) {
        res.send('Invalid Password')
        return
    }
    const token = jsonwebtoken.sign(
        {
            "username": userExist.username,
            "email": userExist.email,
            "status": userExist.status
        },
        "keycryptojwt",
        { expiresIn: 1000 * 60 * 5 }

    )
    console.log(token)
    res.send({
        msg: "Ok, user logged",
        tokenJWT: token,
        userInfo: userExist
    })
}


export { register, login }