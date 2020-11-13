const express = require('express');
const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
  getNext, getSize, getNames, resetTable } = require('./services/main.js');

const santosRouter = express.Router();


santosRouter.get('/', (request, response) => {
  return response.send('Teste')
})

// Método insert
santosRouter.post('/fila', (request, response) => {
  const { name, game } = request.body;

  insertUser(name, game);

  return response.json({message: `Usuário ${name} criado`});
});




// === Métodos get ===
// Retorna todos os itens da fila
santosRouter.get('/fila', async (request, response) => {
  const data = await getAllData().then(data => data);

  response.json(data);
});

// Retorna o item da fila pelo ID
santosRouter.get('/fila/:id', async (request, response) => { 
  const params = request.params.id;

  const data = await getById(params);

  response.json(data);
});

// retorna todos os itens
santosRouter.get('/fila/game/:game', async (request, response) => { 
  const params = request.params.game;

  const data = await getNames(params);

  return response.json(data)
});

santosRouter.get('/fila/next/:game', async (request, response) => { 
  const params = request.params.game;

  const data = await getNext(params);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

santosRouter.get('/fila/size/:game', async (request, response) => { 
  const params = [request.params.game];

  const data = await getSize(params);

  return response.json({message: `Existem ${data.playersCount} usuários na fila`});
});

// Métodos delete
santosRouter.delete('/fila/:game', async (request, response) => {
  const params = [request.params.game];

  const data = await deleteFirstElement(params).then(data => data);

  response.json(data);
})

santosRouter.delete('/delete/:id',  (request, response) => {
  const params = [request.params.id];

  const data = deleteUser(params).then(data => data);

  response.json(data);
})

santosRouter.delete('/reset', async (request, response) => {

  const reset = await resetTable();

  return response.send(reset);
});

module.exports = santosRouter;