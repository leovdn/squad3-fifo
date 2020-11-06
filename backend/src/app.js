// Configuração do Node
const express = require('express');
const cors = require('cors');

const { getAllData, insertUser, deleteUser, getById, deleteFirstElement } = require('./services/main.js');

const app = express();   

app.use(cors());
app.use(express.json());


// Configuração de rotas

app.get('/', (request, response) => {
  return response.send('Teste')
})

app.get('/fila', async (request, response) => { 

  const data = await getAllData().then(data => data);

  response.json(data);
});

app.get('/fila/:id', async (request, response) => { 
  const params = [request.params.id];

  const data = await getById(params).then(data => data);

  response.json(data);
});


app.post('/fila', (request, response) => {
  const { name, game} = request.body;

  const createQueue = { name, game };

  insertUser({name, game});

  return response.json(createQueue);
});

app.delete('/fila/:game', async (request, response) => {
  const params = [request.params.game];

  const data = await deleteFirstElement(params).then(data => data);

  response.json(data);
})

app.delete('/fila/:id', async (request, response) => {
  const params = [request.params.id];

  const data = await deleteUser(params).then(data => data);

  response.json(data);
})


// Exportação do módulo para ser iniciado no arquivo do servidor
module.exports = app;