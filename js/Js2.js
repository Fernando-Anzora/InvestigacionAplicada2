document.getElementById("Crear").addEventListener("click" , Crear);
document.getElementById("Mostrar").addEventListener("click" , Mostrar);
document.getElementById("Editar").addEventListener("click" , Editar);
document.getElementById("Eliminar").addEventListener("click" , Eliminar);

function Crear(){
    localStorage.setItem("Usuario","Angel Gabriel");
    localStorage.setItem("Gmail","Angel@gmail.com");
}
function Mostrar(){
    alert("Usuario: "+localStorage.getItem("Usuario")+" / "+"Gmail: "+localStorage.getItem("Gmail"));
}
function Editar(){
    localStorage.setItem("Usuario","Kevin Patzan");
    localStorage.setItem("Gmail","Patzan@gmail.com");
}
function Eliminar(){
    localStorage.removeItem("Usuario");
    localStorage.removeItem("Gmail");
}
