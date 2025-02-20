function jugar(){
let nombre = prompt("Ingrese su nombre")
let horas = prompt("Ingrese la cantidad de horas trabajadas")
let salario;

if(horas <= 10) {
    salario = horas * 30000;
    alert(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario equivale a $${salario}.`);
} else {
    salario = horas * 33000;
    alert(`Señor/a ${nombre}, el numero de horas es ${horas} y su salario equivale a $${salario}.`);
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