// Exemplo da lógica de fila
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

module.exports = Queue;