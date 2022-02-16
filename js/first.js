//@ts-check
let hola='world';
let x = 'hola '+ hola;
let y = `hola ${hola}`;
let arr = ['red','blue','green']
let test1, test2,test3;
console.log('1'==1); //true
console.log('1'===1); //false

t2.innerHTML= `<span style="color:red;">${x}</span>`;

function print(){
    t2.innerHTML= `<span style="color:${x?'red':'blue'};">
                    ${x==''?'vacio':x}
                   </span>`;
}

function printP(nump=1){
    let resultado = '';
    for(let i = 0; i< nump; i++){
        resultado+=`<p style="color:${arr[i%arr.length]};">
                         ${arr[i%arr.length]}
                    </p>`
    }
    t2.innerHTML=resultado;
}

printP(10);

