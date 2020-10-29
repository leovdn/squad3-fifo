const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());



class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.storage = {};
  }

  enqueue(val) {
    this.storage[this.top] = val;
    this.top++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let removedElement = this.storage[this.bottom];
      delete this.storage[this.bottom];
      this.bottom++;
      return removedElement;
    }
  }

  peek() {
    return this.storage[this.bottom];
  }

  size() {
    return this.top - this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }    
};

let queue = new Queue();
console.log(`Tamanho incial da fila: ${queue.size()}`)
console.log(`Fila está vazia? ${queue.isEmpty()}`)
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
queue.enqueue('e');

console.log(`Tamanho: ${queue.size()}`);
console.log(`Fila está vazia? ${queue.isEmpty()}`)
console.log(`Próximo elemento a ser removido: ${queue.peek()}`);

console.log('\n')
console.log('==== Após remoção do primeiro elemento ====');
queue.dequeue();
console.log(`Tamanho após atualizar: ${queue.size()}`);
console.log(`próximo elemento a ser removido: ${queue.peek()}`);

console.log('\n')
console.log('==== Após remoção do primeiro elemento ====');
queue.dequeue();
console.log(`Tamanho após atualizar: ${queue.size()}`);
console.log(`próximo elemento a ser removido: ${queue.peek()}`);



module.exports = app;