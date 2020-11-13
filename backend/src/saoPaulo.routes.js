const express = require('express');
const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
  getNext, getSize, getNames, resetTable } = require('./services/main.js');

const saoPauloRouter = express.Router();


saoPauloRouter.get('/', (request, response) => {
  return response.send('Teste')
})

// Método insert
saoPauloRouter.post('/fila', (request, response) => {
  const { name, game } = request.body;

  insertUser(name, game);

  return response.json({message: `Usuário ${name} criado`});
});




// === Métodos get ===
// Retorna todos os itens da fila
saoPauloRouter.get('/fila', async (request, response) => {
  const data = await getAllData().then(data => data);

  response.json(data);
});

// Retorna o item da fila pelo ID
saoPauloRouter.get('/fila/:id', async (request, response) => { 
  const params = request.params.id;

  const data = await getById(params);

  response.json(data);
});

// retorna todos os itens
saoPauloRouter.get('/fila/game/:game', async (request, response) => { 
  const params = request.params.game;

  const data = await getNames(params);

  return response.json(data)
});

saoPauloRouter.get('/fila/next/:game', async (request, response) => { 
  const params = request.params.game;

  const data = await getNext(params);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

saoPauloRouter.get('/fila/size/:game', async (request, response) => { 
  const params = [request.params.game];

  const data = await getSize(params);

  return response.json({message: `Existem ${data.playersCount} usuários na fila`});
});

// Métodos delete
saoPauloRouter.delete('/fila/:game', async (request, response) => {
  const params = [request.params.game];

  const data = await deleteFirstElement(params).then(data => data);

  response.json(data);
})

saoPauloRouter.delete('/delete/:id',  (request, response) => {
  const params = [request.params.id];

  const data = deleteUser(params).then(data => data);

  response.json(data);
})

saoPauloRouter.delete('/reset', async (request, response) => {

  const reset = await resetTable();

  return response.send(reset);
});

module.exports = saoPauloRouter;