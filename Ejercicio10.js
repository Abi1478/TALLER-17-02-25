let copias = Number(prompt("Ingrese la cantidad de copias que desea imprimir"));
let precioPorCopia;

if(copias < 500) {
    precioPorCopia = 120;
} else if(copias < 750) {
    precioPorCopia = 100;
} else if (copias < 1000) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

let precioTotal = copias*precioPorCopia;
alert(`Precio por copia: $${precioPorCopia}. Costo total $${precioTotal}`);
