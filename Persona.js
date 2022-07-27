class Persona{
    constructor(nombre, id, email){
        this.nombre = nombre;
        this.id = id;
        this.email = email;
    }
    PrintPersona(){
        localStorage.setItem('nombre 1 es: ', (this.nombre).toString());
        console.log("el nombre es: " + this.nombre)
        localStorage.setItem('Id 1 es: ', (this.id).toString());
        console.log("El id es: " + this.id)
        localStorage.setItem('El correo es: ', (this.email).toString());
        console.log("el correo es: " + this.email)
        let usuarioJson = JSON.stringify(localStorage);
        alert("JSON es: " + usuarioJson)
        console.log(usuarioJson)
    }
}