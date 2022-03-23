const express = require('express');
let  users = require('./users.json')
const app = express();
const port= 3000;

console.log(users);

app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Hola desde express")
})

app.get('/users',(req, res)=>{
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log(req.body);
})


app.listen(port,()=> console.log("Running"))