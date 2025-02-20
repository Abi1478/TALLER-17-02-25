let modelo = Number(prompt("Ingrese el modelo de su auto"));
let defectuosos = [119, 179, 189, 190, 191, 192, 192, 193, 194, 195, 221, 780];

if(defectuosos.includes(modelo)) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("Su automóvil no está defectuoso.");
}