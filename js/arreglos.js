




// todo: ejercicio1
// *1- usa la función generadora de un libro con  al menos titulo: string, autores: string[] ,  año: number
// *2- crea un arreglo de 10 libros con un ciclo for, años entre 1990 y 2000, títulos como libro0, libro1,libro2,...
// *3- inserta un libro más al inicio
// *4- pasa de forma inversa el arreglo de libros a otro arreglo de modo que el arreglo original se queda vacío. (el último elemento del original será el primer elemento del nuevo arreglo).


function createLibro(titulo, autores, year, editorial){
    return {titulo, autores, year, editorial}
}

let arrLibros = []

for (let i = 0; i<10; i++){
    arrLibros.push(createLibro("libro"+i, ["a"+i, "b"], 1990+i, "ed"+i))
}
arrLibros.unshift(createLibro("libro10",["a10"],2000, "ed10"))

console.table(arrLibros);

let arrLibros2 = []
while(arrLibros.length>0)
   arrLibros2.push(arrLibros.pop())

console.table(arrLibros2);   

arrLibros2.splice(4,1) //elimina el libro5
arrLibros2.splice(4,0, createLibro("libro11",["a11"],2001, "ed11")) //inserta libro 11 en pos 4


console.table(arrLibros2);

arrLibros2[0].year= 1992;

let lista1992 = []

arrLibros2.forEach((libro, i)=>{
    if(libro.year == 1992){
        console.log(libro);
        lista1992.push(i)
    }
})

function searchYear(libro){
    if(libro.year == 1992){
        console.log(libro);
    }
}
console.log("-------");

arrLibros2.forEach(searchYear);

console.log(lista1992);


//TODO: función que recibe arregloLibros y año
//* borrar los registros con ese año


function deleteBook(arr, year){
    let pos = arr.findIndex(libro => libro.year == year)
    arr.splice(pos,1)
}

function deleteAll(arr, year){
    let lista = []
    arr.forEach((l,i) => {
        if(l.year == year)
            lista.push(i)
    })

    while(lista.length>0){
        arr.splice(lista.pop(),1)
    }
}

console.table(arrLibros2);
deleteBook(arrLibros2, 1999)
console.table(arrLibros2);

deleteAll(arrLibros2,1992)
console.table(arrLibros2);

