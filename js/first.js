//@ts-check
let hola='world';
let x = 'hola '+ hola;
let y = `hola ${hola}`;
let arr = ['red','blue','green','black','orange']
let test1, test2,test3;
console.log('1'==1); //true
console.log('1'===1); //false

t2.innerHTML= `<span style="color:red;">${x}</span>`;

function print(){
    t2.innerHTML= `<span style="color:${x?'red':'blue'};">
                    ${x==''?'vacio':x}
                   </span>`;
}

function printP(nump=5,fontSize=1){
    let resultado = '';
    for(let i = 0; i< nump; i++){
        resultado+=`<p style="color:${arr[i%arr.length]};font-size:${fontSize}em;">
                         ${arr[i%arr.length]}
                    </p>`
    }
    t2.innerHTML=resultado;
}

printP(5,2);

//funcion imprimeRango  valIni valFin  imprime los valores del rango en html}
function imprimeRango(valIni=5, valFin=8){
    let resp = '';
    for (let i = valIni; i <= valFin; i++) {
        resp+=`<p> ${i} </p>`;
    }

    t2.innerHTML= resp;

}

imprimeRango()
