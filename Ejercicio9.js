let ang1 = Number(prompt("Ingrese el valor del primer angulo"));
let ang2 = Number(prompt("Ingrese el valor del segundo angulo"));
let ang3 = Number(prompt("Ingrese el valor del tercer angulo"));
let suma = (ang1+ang2+ang3);

if(suma === 180) {
    alert("El triangulo es válido.");
} else {
    alert("El triangulo no es válido.");
}