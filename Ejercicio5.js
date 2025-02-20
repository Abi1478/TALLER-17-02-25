function jugar(){
let fisica = Number(prompt("Ingrese su calificación de Física"));
let quimica = Number(prompt("Ingrese su calificación de Química"));
let biologia = Number(prompt("Ingrese su calificación de Biología"));
let matematicas = Number(prompt("Ingrese su calificación de Matemáticas"));
let informatica = Number(prompt("Ingrese su calificación de Informática"));
let porcentaje = (fisica+quimica+biologia+matematicas+informatica)/50*100;
let calificacion;

if(porcentaje <60) {
    calificacion = "Mala";
    alert(`Tu porcentaje es de ${porcentaje}% y tu calificacion es ${calificacion}`);
} else if(porcentaje <=80) {
    calificacion = "Buena";
    alert(`Tu porcentaje es de ${porcentaje}% y tu calificacion es ${calificacion}`);
} else {
    calificacion = "Excelente";
    alert(`Tu porcentaje es de ${porcentaje}% y tu calificacion es ${calificacion}`);
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