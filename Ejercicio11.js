function jugar(){
let emitePitido = prompt("La computadora emite un pitido al iniciarse? Si - No");
let giraDisco = prompt("El disco duro gira? Si - No");
let giraUnidad = prompt("La unidad gira? Si - No")

if(emitePitido === "Si" && giraDisco === "Si") {
    alert("Está averiada.");
}else if(emitePitido === "Si" && giraUnidad === "Si") {
        alert("Póngase en contacto con el técnico de apoyo.");
} else if(emitePitido === "Si" && giraUnidad === "No") {
    alert("Verificar contactos de la unidad.");
} else if(emitePitido === "No" && giraDisco === "No") {
    alert("Traiga la computadora para repararla en la central.");
}else if (emitePitido === "No" && giraDisco === "Si") {
    alert("Compruebe las conexiones de altavoces.");
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