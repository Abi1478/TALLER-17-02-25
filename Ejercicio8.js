function jugar(){
let nombreCliente = prompt("Ingrese su nombre");
let dias = Number(prompt("Ingrese la cantidad de días que desea entrenar (15 - 30 - 90 (3 meses))"));
let costo;

if(dias === 15) {
    costo = 18000;
    alert(`Señor/a ${nombreCliente} el costo del gimnasio por entrenar ${dias} días es: $${costo}`);
} else if(dias === 30) {
    costo = 35000;
    alert(`Señor/a ${nombreCliente} el costo del gimnasio por entrenar ${dias} días es: $${costo}`);
} else if(dias === 90) {
    costo = 86000;
    alert(`Señor/a ${nombreCliente} el costo del gimnasio por entrenar ${dias} días es: $${costo}`);
}
}

jugar();
let opcion;
let continuar = true;
while (continuar) {
    opcion = Number(prompt("¿Qué desea hacer? (1) Jugar de nuevo (2) Volver al menú:"));
    switch (opcion) {
        case 1:
            jugar();
            break;
        case 2:
            window.location.href = "index.html";
            continuar = false;
            break;
        default:
            alert("Opción no válida. Intente de nuevo.")
    }
}