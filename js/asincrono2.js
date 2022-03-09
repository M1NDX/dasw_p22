// setTimeout(()=>{
//     console.log("hola 1");
//     setTimeout(()=>{
//         console.log("hola 2");
//         setTimeout(()=>{
//             console.log("hola 3");
//             setTimeout(()=>{
//                 console.log("hola 4");
                
//             },4000)
//         },3000)
//     },2000)
// },1000)


function sayHi(count=1){
    return new Promise( (resolve)=> {
        setTimeout(()=>{
            console.log("hola", count);
            resolve(++count)
        }, count*1000)
    })
}

sayHi()
.then((c)=> sayHi(c))
.then((c)=> sayHi(c))

console.log("test");