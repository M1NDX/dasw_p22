const http = require('http');
const cowsay = require('cowsay');
const chalk = require('chalk');
const hostname ='127.0.0.1'
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    console.log(chalk.red.bold("solicitd realizada"));
    console.log(cowsay.say({
        text : "DASW",
        e : "--",
        T : "U "
    }));
    res.end('Hello World 2\n');
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})