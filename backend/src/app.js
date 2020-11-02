// Configuração do Node
const express = require('express');
const cors = require('cors');
const app = express();   

app.use(cors());
app.use(express.json());

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

  return response.json(results);
});

app.post('/queues', (request, response) => {
  const { title, players, hour} = request.body;

  const queue = { title, players, hour };

  queues.push(queue);

  return response.json(queue);
})

// Exportação do módulo para ser iniciado no arquivo do servidor
module.exports = app;