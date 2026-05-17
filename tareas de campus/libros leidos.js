let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");

    let i = 0;
    while (i < librosLeidos.length){
     console.log(librosLeidos [i]);
    i++;
    }
   
}

agregarLibro("Harry Potter 1");
agregarLibro("Balances de materia y energia");
agregarLibro("Introduccion al calculo vectorial");

mostrarLibrosLeidos();