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
