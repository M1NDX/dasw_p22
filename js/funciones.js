function f1(arg1,arg2="ISI", arg3="10"){
    console.log(` ${arg1}->${arg2}->${arg3} `);
    
}

//f1([1,'hola'], 'mundo')
//f1("Pedro")

let y = f1; //guardar función en y
f1("Pedro")
y("juan")


let double = function (v1=10){ 
    return v1*2;
}

console.log(double()+10)
console.log(double(20)+10)

