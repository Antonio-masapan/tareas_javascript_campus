let contrasena = document.getElementById("contrasena");

let longitud = document.getElementById("longitud");

let mayusculas = document.getElementById("mayusculas");

let minusculas = document.getElementById("minusculas");

let numeros = document.getElementById("numeros");

let simbolos = document.getElementById("simbolos");

let boton = document.getElementById("boton");

boton.addEventListener("click", function () {

    let caracteres = "";

    let passwordFinal = "";

    if (mayusculas.checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (minusculas.checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }
    if (numeros.checked) {
        caracteres += "0123456789";
    }
    if (simbolos.checked) {
        caracteres += "!@#$%^&*()_+";
    }
    if (caracteres === "") {
        alert("Selecciona al menos una opción");
        return;
    }

    for (let i = 0; i < longitud.value; i++) {
        let numeroAleatorio = Math.floor(Math.random() * caracteres.length);
        passwordFinal += caracteres[numeroAleatorio];
    }
    contrasena.value = passwordFinal;

});