let tipoLavadora = Number(prompt("Ingrese tipo de lavadora 1(grande) - 2(pequeña)"))
let cantidad = Number(prompt("Ingrese la cantidad  de lavadoras que desea alquilar"))
let horasAlquiler = Number(prompt("Ingrese la cantidad de horas que desea alquilar la/s lavadora/s"))
let costoPorHora = tipoLavadora === 1? 4000 : 3000;
let total = cantidad*horasAlquiler*costoPorHora;

if(cantidad >3) {
    total *= 0.97;
}

alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`)