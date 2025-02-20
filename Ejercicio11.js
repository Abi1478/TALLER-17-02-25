let emitePitido = prompt("La computadora emite un pitido al iniciarse? Si - No");
let giraDisco = prompt("El disco duro gira? Si - No");

if(emitePitido === "Si" && giraDisco === "Si") {
    alert("Póngase en contacto con el técnico apoyo.");
} else if(emitePitido === "Si" && giraDisco === "No") {
    alert("Verificar contactos de la unidad.");
} else if(emitePitido === "No" && giraDisco === "No") {
    alert("Traiga la computadora para repararla en la central.");
}else if (emitePitido === "No" && giraDisco === "Si") {
    alert("Compruebe las conexiones de altavoces.");
}