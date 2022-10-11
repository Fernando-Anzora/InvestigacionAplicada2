document.getElementById("Crear").addEventListener("click" , Crear);
document.getElementById("Mostrar").addEventListener("click" , Mostrar);
document.getElementById("Editar").addEventListener("click" , Editar);
document.getElementById("Eliminar").addEventListener("click" , Eliminar);

function Crear(){
    sessionStorage.setItem("Usuario","Fernando Andrade");
    sessionStorage.setItem("Gmail","Andrade@gmail.com");
}
function Mostrar(){
    alert("Usuario: "+sessionStorage.getItem("Usuario")+" / "+"Gmail: "+sessionStorage.getItem("Gmail"));
}
function Editar(){
    sessionStorage.setItem("Usuario","Christopher Eliseo");
    sessionStorage.setItem("Gmail","Eliseo@gmail.com");
}
function Eliminar(){
    sessionStorage.removeItem("Usuario");
    sessionStorage.removeItem("Gmail");
}
