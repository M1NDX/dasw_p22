"use strict;"

let objeto1 = {
    "prop1": 123,
    prop2: "texto",
    prop3: ["a","b"]
};

let objeto2 = {
    prop1: 321,
    prop2: "texto2",
    prop3: ["c","d"]
};

console.log(objeto1);

let x = "prop2"
console.log(objeto1[x]);

function printProp (obj, prop){
    console.log(obj[prop]);
}

printProp(objeto2,"prop1");

function crearObjeto(prop1, prop2, val1, val2){
    return {
        [prop1] : val1,
        [prop2] : val2
    }
}


let obj3 = crearObjeto("nombre","apellido", "c","d")
console.log("obj3", obj3);

function createObject2(prop1, prop2){
    return {
        prop1,//prop1: prop1,
        prop2,//prop2: prop2
    }
}

console.log(createObject2("abc","def"));

function Computadora(marca, modelo, procesador){
    this.marca = marca;
    this.modelo =modelo;
    this.procesador = procesador;
}

let compu1 = new Computadora("HP","ProBook", "Intel");

console.log(compu1);


/****** */

// Crear objeto 

let libro1 = {
    titulo: "libro1",
    autores: ["a1","a2"] ,
    year: 1990,
    editorial: "ed1",
}

console.log(libro1);

function createLibro(titulo, autores, year, editorial){
    return {titulo, autores, year, editorial}
}

let libro2 = createLibro("libro2",["a2","a3"], 2000, "ed2")
console.log(libro2);

class Libro {
    constructor(titulo, autores, year, editorial){
        this.titulo=titulo;
        this.autores=autores;
        this.year=year;
        this.editorial=editorial;
    }
}

let libro3 = new Libro("libro3",["a1","a3"], 2020, "ed3")

console.log(libro3);

let libro4 = {}

Object.assign(libro4, libro3)

console.log(libro4);

// if(alumno1.expediente === undefined) {
//     console.log("alumno1 no tiene esa propiedad");
//     }  // si una propiedad tiene valor undefined dirá que no existe con == o ===
    
// if(!("expediente" in alumno1) ){
//     console.log("alumno1 no tiene la propiedad");
// }

// for(let key in alumno1) {
//     console.log(`${key}:${alumno1[key]}`);
// }

let props = Object.keys(libro3)
console.log(props);

    //*Muestra todas las propiedades de un libro
function showProps(obj){
    for(let key in obj) {
        console.log(`${key}:${obj[key]}`);
    }
}



    //*Crea una función que indique si un objeto recibido tiene o no alguna propiedad y de tenerla mostrar el valor de esa propiedad.

    function showProp(obj, prop){
        if(prop in obj){
            console.log(obj[prop]);
        }else {
            console.log("no existe la propiedad "+prop);
        }
    }


    //*funcion que comparar 2 objetos  
    
function compareObjects(obj1, obj2) {
    let keysO1 = Object.keys(obj1); 
    let keysO2 = Object.keys(obj2); 

    if(keysO1.length == keysO2.length){
        for(let key in obj1) {
            if(! (key in obj2)){
                return false;
            }else{
                if(obj1[key]!==obj2[key]){
                    return false
                }
            }
        }
        return true;
    }   
    return false;


}


// console.log(compareObjects({a:1},{a:1}))
console.log(compareObjects(libro3,libro4))


 console.log(JSON.stringify(libro3))

 let libro5 = JSON.parse('{"titulo":"libro5","autores":["a1","a3"],"year":2020,"editorial":"ed3"}')
 libro5.autores.push("a4")
  console.log(libro5);