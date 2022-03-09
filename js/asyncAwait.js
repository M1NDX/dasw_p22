function delay(time){
    return new Promise((res)=> {
        setTimeout(()=>{
            res(time)
        }, time)
    })
}

async function sayHi(){
    let time = await delay(1000);
    console.log("hola 1");
    time = await delay(time*2);
    console.log("hola 2");
    return "end hola"
}

async function fase2(){
    let respuesta = await sayHi();
    console.log(respuesta);
    console.log("fase 2");
}

//sayHi();
fase2()
console.log("test");