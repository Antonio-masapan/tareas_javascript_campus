let frutas = ["manzana", "pera", "uva", "manzana", "pera"];

let conteo = {};

let i = 0;

while (i < frutas.length) {

    let fruta = frutas[i];

    if (conteo[fruta]) {
        conteo[fruta]++;
    } else {
        conteo[fruta] = 1;
    }

    i++;
}

console.log(conteo);