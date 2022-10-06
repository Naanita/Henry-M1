'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.lengtg <= 1 ) return array; 


  //[5, 1, 4, 2, 8]
     p
        i
  
  
  
  var Pivote = array[0]
  var left = []
  var right = []
  //var equal = []
  
  for ( let i = 0; i < array.length; i++){
  if(array[i] < pivote ){ // 1 < 5 
  left.push(array[i])
  }
  else{
  right.push(array[i])
  }
  }
  return quickSort(left).concat(pivote).concat(quickSort(right))
  //return quickSort([1,4,2]). concat(5).concat(quickSort(8))
  // crea un nuevo contexto de eejecución ---> quickSort ([1, 4, 2]) --> pivote 1
                                                                        // left = []
                                                                        // right = [4, 2]
  
  
  //return quickSort([]). concat(1).concat(quickSort([4,2]))
      //  concat(quickSork([4,2])) --> pivote [4]
                                                      //  left[2]
                                                      // right []
  //return quickSort([2]). concat(4).concat(quickSort([]))
  
  
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
//caso base: 


//[5, 1, 4, 2, 8]


if(array.length <= 1 ) return array; 
var middle = Math.floor(array.length / 2); 
var left = array.slice(0, middle) // [5, 1]
var right = array.slice(middle) //[4, 2, 8]
 return merge(mergrSort(left), mergeSort(right));
}

function merge (left, rigth){
var result = []
var i = 0; // [5,1]
var j = 0; // [4, 2, 8]


//   [5, 1]                   [4, 2, 8]
//           i                   j
while(i < left.length && j < rigth.length){
if(left[i] < right[j]){ // 1 < 4
result.push(left[i]) // left = [1] 
i++
}
else{
result.push(rigth[j]) // right = [5]
j++
}
}
return result.concat(left.slice(i).concat(right.slice(j)))
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
