
class UserException{
    constructor(message){
        this.message = message;
    }
}

class User {
    static users = []
    static _uid = 0; //user id counter
    constructor (nombre, correo, edad){
        this.nombre = nombre;
        this.correo = correo;
        this._edad = edad;
        this._id = User._uid;
        User._uid++;

        User.users.push(this)
    }

    set id(valId){
        console.log("entra a asignar id");
        //TODO: userException (no es posible asignar id) 
        throw new UserException("no se puede asignar id")       
    }

    get id(){
        return this._id;
    }

    set edad(val){
        if(val >= 15 && val<=100 ){
            this._edad= val;
        }else{
            throw new UserException("no es una edad válida")
        }
    }

    get edad(){
         return this._edad; 
    }

    static createUser(obj){
       //validar atributros nombre, correo y edad
       if('nombre' in obj && 'correo' in obj && '_edad' in obj){
           new User(obj.nombre, obj.correo,obj.edad)
       } else{
           //TODO: UserException
           throw new UserException("Error al crear, faltan atributos")
       }
    }
   
    static borrarUsuario(id){
        //search users 
    }

    static actualizarUsuario(id, userData){
        //get the user with the id 

        //call update function

    }

    update(userData){
        //get only nombre, correo y _edad
        let {nombre, correo, _edad} = userData;
        this.nombre = nombre || this.nombre; //si nombre es vacio me quedo como estaba
        this.correo = correo || this.correo; //faltaría validar que correo tenga @
        this._edad = _edad || this._edad;
    }

    
    static filterUsers(queryObject ){

    }

    static getUsers (){
        return User.users;
    }

}

let user1 = new User("us1","us1@test.com",25);
let user2 = new User("us2","us2@test.com",29);


User.createUser({nombre:"test", correo: "t@t", _edad: 34})

console.table(User.users);
try{
    user1.id = 34;
}catch(e){
    console.log(e);
}

user1.edad = 20;
console.log(user1);
console.log(user1.edad);


