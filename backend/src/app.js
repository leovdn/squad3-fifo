// Configuração do Node
const express = require('express');
const cors = require('cors');

const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
        getNext, getSize, getNames, resetTable } = require('./services/main.js');

const app = express();   

app.use(cors());
app.use(express.json());

// Configuração de rotas

app.get('/', (request, response) => {
  return response.send('Teste')
})

// Método insert
app.post('/fila', (request, response) => {
  const { name, game } = request.body;

  insertUser(name, game);

  return response.json({message: `Usuário ${name} criado`});
});

// Métodos get

app.get('/fila', async (request, response) => { 

  const data = await getAllData().then(data => data);

  response.json(data);
});

app.get('/fila/:id', async (request, response) => { 
  const params = [request.params.id];

  const data = await getById(params);

  response.json(data);
});

// retorna apenas primeiro nome da lista na promise
app.post('/fila/names', async (request, response) => { 
  const { game } = request.body;

  const data = await getNames(game).then(data => data);

  return response.json(data);
});

app.post('/fila/next', async (request, response) => { 
  const { game } = request.body;

  const data = await getNext(game);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

app.post('/fila/size', async (request, response) => { 
  const { game } = request.body;

  const data = await getSize(game);

  return response.json({message: `Existem ${data.playersCount} usuários na fila`});
});

// Métodos delete
app.delete('/fila/:game', async (request, response) => {
  const params = [request.params.game];

  const data = await deleteFirstElement(params).then(data => data);

  response.json(data);
})

app.delete('/delete/:id',  (request, response) => {
  const params = [request.params.id];

  const data = deleteUser(params).then(data => data);

  response.json(data);
})

// Exportação do módulo para ser iniciado no arquivo do servidor
module.exports = app;