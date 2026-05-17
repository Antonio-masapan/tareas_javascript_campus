let boton = document.getElementById("botonAgrega");
let input = document.getElementById("textoComentarios");
let comentarios = document.getElementById("comentarios");

boton.addEventListener("click", function () {
  let texto = input.value;
  if (texto === "") {
    alert("Escribe algo por favor");
    return;
  }
  let nuevoComentario = document.createElement("div");
  nuevoComentario.className = "comentario";
  nuevoComentario.textContent = texto;
  comentarios.appendChild(nuevoComentario);
  input.value = "";
});
