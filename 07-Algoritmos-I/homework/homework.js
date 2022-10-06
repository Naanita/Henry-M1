'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var arrayFactores = [1] //porque siempre debe comenzar en 1 porque todo numero multiplicado por 1 es el mismo.
  var divisor = 2
  
  while (num > 1){ //mientras numm sea mayor a 1 ejecute lo siguiente.
  if (num % divisor === 0) {
  arrayFactores.push (divisor) 
   num = num / divisor
  }
  else {
  divisor++
  }
  }
  return arrayFactores
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var huboCambio = true;
  while(huboCambio){ // mientras sea true cambiala a false
  hubocambio = false; 
  for (let i = 0; i < array.length; i++){
  if ( array[i] > array [i+1]){
  var aux = array [i]
  array[i] = array [i + 1]
  array [i + 1] = aux 
  huboCambio = true
  }
  }
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++){
    var j = i - 1
    var aux = array [i] // con quien vamos a ir comparando 
    while (j>=0 && array[j] > aux){
    array [j+1] = array [j]
    j--
    }
    arra[j+1] = aux 
    }
    return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
