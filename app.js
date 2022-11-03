
var fondo = document.getElementById("fondo")
var boton = document.getElementById("boton")

function cambiarFondo(){
    fondo.style.backgroundColor = "white"
    boton.onclick = cambiarFondo2;
}

function cambiarFondo2(){
    fondo.style.backgroundColor = "gray"
    boton.onclick = cambiarFondo;
}