// Exemplo da lógica de fila
const arrayFila = require('../app');

class Queue {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    arrayFila;
  }

  enqueue(val) {
    arrayFila[this.top] = val;
    this.top++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let removedElement = arrayFila[this.bottom];
      delete arrayFila[this.bottom];
      this.bottom++;
      return removedElement;
    }
  }

  peek() {
    return JSON.stringify(arrayFila[this.bottom]);
  }

  size() {
    return this.top - this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }    
};

module.exports = Queue;