function registro(){
    const name1 = document.getElementById("InputNombre").value;
    const id1 = document.getElementById("InputId").value;
    const email1 = document.getElementById("InputEmail").value;
    let main = new Persona(name1,id1,email1)
    main.PrintPersona();
}
function borrar(){
    localStorage.clear();
}