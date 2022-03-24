const express = require("express");
const router = express.Router();
const users = require("./users.json");
const shortid = require("shortid");
const fs = require ("fs");
const {auth, validarUsuario, requireAdmin} = require("./middlewares/auth")

router.get('/', validarUsuario, (req,res)=>{
    console.log(req.query);
    console.log(req.userId);
    
   
    let {name, username} = req.query;

    let filtro = users.slice();
    if(name){
        filtro = filtro.filter(usr => usr.name.toUpperCase().includes(name.toUpperCase()))
    }

    if(username){
        filtro = filtro.filter(usr => usr.username.toUpperCase().includes(username.toUpperCase()))
    }

    if(!req.esAdministrador){
        filtro = filtro.map(usr => {
            let {username, id, email} = usr;
            return {username,id, email}
        } )
    }

    res.send(filtro);
})


router.post('/', (req,res)=>{
    console.log(req.body);
    let newUser = {};
    let {name, email, username} = req.body;
    

    if(name && email && username){
        newUser.name = name;
        newUser.email = email;
        newUser.username = username;
        newUser.id = shortid.generate();
        console.log(newUser);
        users.push(newUser);
        fs.writeFileSync("users.json", JSON.stringify(users));
        res.status(201).send(newUser);
    }else{
        res.status(400).send("Faltan datos")
    }
    // res.send();
})

router.get('/lista', (req,res)=>{
    res.send("en lista")
})

router.get('/:id', validarUsuario, requireAdmin, (req,res)=>{
    console.log(req.params.id);
    let user = users.find(usr => usr.id == req.params.id)
    if(user){
        res.send(user)
    }else{
        res.status(404).send({error: " no encontrado"})
    }
})

router.delete('/:id', (req,res)=>{
    let pos = users.findIndex(usr => usr.id == req.params.id)

    if(pos >= 0){
        let deletedUser = users.splice(pos,1);
        res.send(deletedUser)
        fs.writeFileSync("users.json", JSON.stringify(users));
        return;
    }


    res.status(404).send({error: "no se encontró usuario"})
})

router.put('/:id',(req,res)=>{
    let user = users.find(usr => usr.id == req.params.id)
    let {name, username, email} = req.body;
    if(user){
        user.name = name? name: user.name;
        user.username = username? username: user.username;
        user.email = email? email: user.email;
        fs.writeFileSync("users.json", JSON.stringify(users));
        res.send(user);
    }else{
        res.status(404).send({error: "no existe"})
    }
})
module.exports = router;