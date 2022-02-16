function mostrarUsuario(id, nombre, cb){
    if (id>0 && id <100){
        cb(nombre, 'blue','1.2em');    
    }else{
        cb("Error en indice", 'red', '2em')
    }
}

let style = function (info, color, size){
    t2.innerHTML +=`<p style="color:${color}; font-size:${size};">
                    ${info}
                  </p>`;
}

let styleArrow= (info,color,size)=>  t2.innerHTML +=`<p style="color:${color}; font-size:${size};">
                                                    ${info}
                                                    </p>`;



let styleConsole = function (info, color, size){
    console.log(info)
}

let styleClgArrow = info => console.log(info)

mostrarUsuario(45, 'Juan',style)

// mostrarUsuario(34, 'Test', a => console.log()info)
mostrarUsuario(123, 'sdfsd', styleArrow)