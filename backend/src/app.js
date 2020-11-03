// Configuração do Node
const express = require('express');
const cors = require('cors');
const app = express();   
const QueueClass = require('./models/Queue');

app.use(cors());
app.use(express.json());

let fila = new QueueClass();

// Configuração de rotas
const queues = [];

app.get('/', (request, response) => {
  return response.json({queues})
})

app.get('/queues', (request, response) => {
  const { title } = request.query;

  const results = title
    ? queues.filter(queue => queue.title.includes(title))
    : queues
  ;    

  // Listagem de cada item da fila
  console.log('====== Objetos =========')

  {queues.forEach(item => {
    console.log(item);
  })}

  // Verificando informações do array que armazena as filas
  console.log('Tamanho da fila:', queues.length)
  console.log(`Tamanho: ${fila.size()}`);
  console.log(`Fila está vazia? ${fila.isEmpty()}`)
  console.log(`Próximo elemento a ser removido: ${fila.peek()}`);
  console.log('\n')

  // Removendo um item da fila após ser populado com o método POST
  console.log('==== Após remoção do primeiro elemento ====');
  fila.dequeue();
  console.log(`Tamanho após atualizar: ${fila.size()}`);
  console.log(`próximo elemento a ser removido: ${fila.peek()}`);
  console.log('\n')

  // Confirmação da lógica após exclusão do segundo item
  console.log('==== Após remoção do primeiro elemento ====');
  fila.dequeue();
  console.log(`Tamanho após atualizar: ${fila.size()}`);
  console.log(`próximo elemento a ser removido: ${fila.peek()}`);

  return response.json(results);
});

app.post('/queues', (request, response) => {
  const { title, players, hour} = request.body;

  const createQueue = { title, players, hour };

  queues.push(createQueue);

  // Método da classe Queue para enfileirar novo item adicionado ao Array
  fila.enqueue(createQueue);

  return response.json(createQueue);
})


// Exportação do módulo para ser iniciado no arquivo do servidor
module.exports = app;