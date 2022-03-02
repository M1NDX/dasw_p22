// console.log("1");
// setTimeout(()=> console.log("hola"),1000);
// console.log("end");

function hola(cont = 1){
    if(cont<=5)
        setTimeout(()=>{
            console.log("hola", cont)
            cont++;
            hola(cont)
        }, cont*1000)
}

function mundo(cont = 1){
    if(cont<=10)
        setTimeout(()=>{
            console.log("mundo", cont)
            mundo(++cont)
        }, 1000)
}

hola()
mundo()