"use strict";

function BinarioADecimal(num) {
let base = 2;
let decimal = 0; 

 for (let i = 0; i < num.length; i++) {
 
  decimal = decimal + num[i] * Math.pow(base, num.length - 1 - i )
 
 } 
return decimal; 
}


  // // tu codigo aca
  // let decim = 0;
  // let array = [];
  // // For mapea el array de num, y si es menor que 0 escala y unshuft lo posiciona el la primera posción del array
  // for (let i = 0; i < num.length; i++) {
  //   array.unshift(num[i]);
  // }

  // for (let j = 0; j < chain.length; j++) {
  //   //después observamos que el operador aritmetico (+=) es la abreviatura de escribir decimal = decimal + math.pow que devuelve la base de los binarios (2) multiplicado por su exponente.
  //   decim += Math.pow(2, j) * chain[j];
  // }

  // return decim;


function DecimalABinario(num) {

let binario = (num % 2).toString(); 
while(num > 1 ){
  num = parseInt(num/2);
  binario = (num%2) + (binario);
}
return binario 






// [1,2,3,4,5,6,7,]
//  0 1 2 3 5 6


  
  // // tu codigo aca
  // let bin = [];
  // let textbin = "";

  // for (let i = 0; i < 100; i++) {
  //   if (num < 1) {

  //     // break termina el bucle /kill

  //     break;
  //   }


  //   bin.unshift(num % 2);

  //   //num % 2, devuelve el restante de la divición del decimal dividido la base binaria  y math.floor redondea un decimal a un valor entero en su inferio es decir: 2.85 math,floor devuelve 2.
  //   num = Math.floor(num / 2);
  // }

  // for (let i = 0; i < bin.length; i++) {
  //   textbin += bin[i];
  // }
  // return textbin;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
