import Express from "express"

const app = Express()
app.use(Express.json())

app.get('/get', function(req, res){
    res.send('Enviar esta mensagem')
})

app.post('/register', function(req, res){
    try{
        const {nome, sobrenome, email, senha, nascimento} = req.body
        if(!nome || !sobrenome || !email || !senha || !nascimento){
            res.status(406).send("Todos os campos devem ser enviados")
            return
        } 

        res.status(201).send("Usuário criado")
        return
    } catch(error){
        res.send("OK")
    }
})

app.listen(8000)