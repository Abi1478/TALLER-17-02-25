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