function calcularCostoSandwich() {
    let tamaño = prompt("¿Desea un sandwich pequeño o grande?").toLowerCase();
    let costoTamaño = (tamaño === "grande") ? 12000 : 6000;

    let costoIngredientes = 0;

    if(prompt("¿Desea Tocineta? Si/No").toLowerCase() === "si") {
        costoIngredientes += 3000;
    }
    if(prompt("¿Desea Jalapeño? Si/No").toLowerCase() === "si") {
        costoIngredientes += 0;
    }
    if(prompt("¿Desea Pavo? Si/No").toLowerCase() === "si") {
        costoIngredientes += 3000;
    }
    if(prompt("¿Desea Queso? Si/No").toLowerCase() === "si") {
        costoIngredientes += 2500;
    }

    let costoTotal = costoTamaño + costoIngredientes;
    alert(`El costo total es: $${costoTotal}`);
}

calcularCostoSandwich();