// Configuração do Node
const express = require('express');
const cors = require('cors');
// const Queue = require('./models/Queue');
const app = express();   

app.use(cors());
app.use(express.json());


// Código de teste da aplicação
// let queue = new Queue();
// console.log(`Tamanho incial da fila: ${queue.size()}`)
// console.log(`Fila está vazia? ${queue.isEmpty()}`)
// queue.enqueue('a');
// queue.enqueue('b');
// queue.enqueue('c');
// queue.enqueue('d');
// queue.enqueue('e');

// console.log(`Tamanho: ${queue.size()}`);
// console.log(`Fila está vazia? ${queue.isEmpty()}`)
// console.log(`Próximo elemento a ser removido: ${queue.peek()}`);

// console.log('\n')
// console.log('==== Após remoção do primeiro elemento ====');
// queue.dequeue();
// console.log(`Tamanho após atualizar: ${queue.size()}`);
// console.log(`próximo elemento a ser removido: ${queue.peek()}`);

// console.log('\n')
// console.log('==== Após remoção do primeiro elemento ====');
// queue.dequeue();
// console.log(`Tamanho após atualizar: ${queue.size()}`);
// console.log(`próximo elemento a ser removido: ${queue.peek()}`);


const queues = [];

app.get('/', (request, response) => {
  return response.send('teste')
})

app.get('/queues', (request, response) => {
  const { title } = request.query;

  const results = title
    ? queues.filter(queue => queue.title.includes(title))
    : queues
  ;    

  return response.json(results);
});

app.post('/queues', (request, response) => {
  const { title, players, hour} = request.body;

  const queue = { title, players, hour };

  queues.push(queue);

  return response.json(queue);
})





// Exportação do módulo para ser iniciado pelo servidor
module.exports = app;