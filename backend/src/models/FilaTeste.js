// Código de teste da aplicação
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
