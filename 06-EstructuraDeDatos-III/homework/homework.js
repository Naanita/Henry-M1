"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
 this.value = value; //root 
 this.left = null; 
 this.right = null; 
}
BinarySearchTree.prototype.insert = function(value) {//el numero que va insertar
  if(value > this.value){
    if(!this.right){//this.rigth === null
      this.right = new BinarySearchTree(value)// si es más grande, que lo inserte a la derecha 
    }else{
      this.right.insert(value)
      }
  }
  else {
    if(!this.left){
      this.left = new BinarySearchTree(value)
    }else{
      this.left.insert(value)
    }
  }
};
BinarySearchTree.prototype.contains = function(value) {//value es lo quiero encontrar 
if(value === this.value) return true;

if(value > this.value){
  if(!this.right) return false
  else{
    return this.right.contains(value) // si existe algo en derecha que siga buscando 
  }
}
if(value < this.value){
  if(!this.left) return false
  else{
    return this.left.contains(value)
  }
}
}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {

//in order (left -root - right)
if(!order || order === "in-order"){
  if(this.left) this.left.depthFirstForEach(cb,order)
  cb(this.value)
  if(this.right)this.right.depthFirstForEach(cb, order)
}
else if(order === "pre-order"){
// (root- left - right)
cb(this.value)
if(this.left) this.left.depthFirstForEach(cb,order)
if(this.right)this.right.depthFirstForEach(cb, order)
}
else{
  if(this.left) this.left.depthFirstForEach(cb,order)
  if(this.right)this.right.depthFirstForEach(cb, order)
  cb(this.value)
}
};


BinarySearchTree.prototype.breadthFirstForEach = function(cb, aux=[]) {
cb(this.value)

if(this.left){
aux.push(this.left)
}
if(this.right){
  aux.push(this.right)
}
if(aux.length>0){
  aux.shift().breadthFirstForEach(cb, aux)

}
}

BinarySearchTree.prototype.size = function() {
  if(this.right === null && !this.left) return 1 //null a izq y otro a derecha return 1 porque seria el nodo raiz. 
  if(this.right && this.left) return 1 + this.left.size() + this.right.size()// la suma de root + nodo izq + nodo derecho
  if(this.right) return 1 + this.right.size()
  if(this.left) return 1 + this.left.size()
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
