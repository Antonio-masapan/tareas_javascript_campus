let libro = {
  titulo: "Balance de Materia y Energía",
  autor: "Himmelblau",
  año: 1997,
  estado: "En prestamo",
};

function describirLibro(libro) {
  console.log(
    "Libro titulado " +
      libro.titulo +
      ", escrito por " +
      libro.autor +
      ", en el año " +
      libro.año +
      ", estado: " +
      libro.estado,
  );
}

describirLibro(libro);
