// Exemplo da lógica de fila
class QueueClass {
  constructor() {
    this.top = 0;
    this.bottom = 0;
    this.queuesStorage = [];
  }

  enqueue({title, players, hour}) {
    this.queuesStorage[this.top] = title, players, hour;
    this.top++;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let removedElement = this.queuesStorage[this.bottom];
      delete this.queuesStorage[this.bottom];
      this.bottom++;
      return removedElement;
    }
  }

  peek() {
    return this.queuesStorage[this.bottom];
  }

  size() {
    return this.top - this.bottom;
  }

  isEmpty() {
    return this.size() === 0;
  }    
};

module.exports = QueueClass;