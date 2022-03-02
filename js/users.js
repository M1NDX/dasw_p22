"use strict"

let users = [
    {
        nombre: "Juan" ,
        correo: "j@test.com" ,
        edad: 23
    },
    {
        nombre: "María" ,
        correo: "m@test.com" ,
        edad: 25
    },
    {
        nombre: "Marta" ,
        correo: "mar@test.com" ,
        edad: 27
    },
]

let res= users.map(user => {
    return ` 
    <div class="user">
        <p > nombre: ${user.nombre} </p>
        <p> correo: ${user.correo} </p>
        <p> edad: ${user.edad} </p>
    </div> `;
}).join('')

lista.innerHTML = res;