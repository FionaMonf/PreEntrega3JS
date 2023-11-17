const botonesNumero = document.querySelectorAll(".numero");
const botonesAux = document.querySelectorAll(".botaoAux");
const division = document.querySelector(".divisao");
const suma = document.querySelector(".soma");
const resta = document.querySelector(".subtracao");
const multiplicacion = document.querySelector(".multiplicacao");
const igual = document.querySelector(".igual");
const pantallita = document.getElementById("visor");

class Pantallita {
  constructor(valorIngresado) {
    this.valorActual = this.valorActual
    this.valorIngresado = "";
    this.calculadora = new Calculadora();
  }
}



const numerito=(e)=> {
    alert("hola")
}