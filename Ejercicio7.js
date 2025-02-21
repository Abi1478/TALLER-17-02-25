function jugar(){
let genero = prompt("Ingrese su genero (femenino - masculino)");
let edad = Number(prompt("Ingrese su edad"));
let ayuda;

if(genero === "femenino") {
    if(edad > 50) {
        ayuda = 120000;
        alert(`El valor de ayuda mensual es: $${ayuda}`)
    } else if(edad >= 30) {
        ayuda = 100000;
        alert(`El valor de ayuda mensual es: $${ayuda}`)
    } else {
        ayuda = 0;
        alert(`El valor de ayuda mensual es: $${ayuda}`)
    }
} else {
    ayuda = 40000;
    alert(`El valor de ayuda mensual es: $${ayuda}`);
}
}

jugar();
let opcion;
let continuar = true;
while (continuar) {
    opcion = Number(prompt("¿Qué desea hacer? (1) Intentarlo de nuevo (2) Volver al menú:"));
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