const express = require("express");
const userRoute = require("./users");
const {auth} = require("./middlewares/auth")
const logMiddlewares = require("./middlewares/log")
const {log} = require("./middlewares/log")
const app = express();
const port = 3000;

//todo json que recibo lo manda como req.body
// app.use(logMiddlewares.log);
app.use(log);
app.use(express.json()); 
app.use('/api/users', userRoute);

app.get('/', (req,res)=>{
    res.status(200).send("Hola DASW");
} )

app.listen(port, ()=> console.log("running"));