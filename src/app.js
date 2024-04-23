/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateCard();
  //Event listener de click
  document.getElementById("button").addEventListener("click", generateCard);
};

function generateCard() {
  //Arrays cartas info
  const palos = ["♥", "♠", "♣", "♦"];
  const valores = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  //   // Seleccionar aleatoriamente un palo y un valor
  //Create random number 1 - 4 to get figure
  //Create random number from 1 to 12 to get number of card
  let paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  console.log(paloAleatorio, valorAleatorio);
  document.getElementById("palo").innerHTML = paloAleatorio;
  document.getElementById("paloAbajo").innerHTML = paloAleatorio;
  document.getElementById("valor").innerHTML = valorAleatorio;

  if (paloAleatorio == "♥" || paloAleatorio == "♦") {
    document.getElementById("palo").style.color = "red";
    document.getElementById("paloAbajo").style.color = "red";
  }
}

//Create general "card class" as template of styles

//Agregar boton que sume una segunda carta aleatoria -cuando hace el evento onclick -llamara la funciuon generar carta
//Al agregarse se disminuye su tamaño y se pone a un costado -wrapeado

//carta estaria generada - al click se mostrara (.display) bootstrap
