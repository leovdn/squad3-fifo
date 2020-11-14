const express = require('express');
const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
  getNext, getSize, getNames, resetTable, getAllDataByBranch } = require('./services/main.js');

const santosRouter = express.Router();


santosRouter.get('/', (request, response) => {
  return response.send('Unidade de Santos')
})

// Método insert
santosRouter.post('/fila', (request, response) => {
  const { name, game, branch } = request.body;

  insertUser(name, game, branch);

  return response.json({message: `Usuário ${name} criado`});
});


// === Métodos get ===
// Retorna todos os itens da fila
santosRouter.get('/fila', async (request, response) => {
  const data = await getAllData().then(data => data);

  response.json(data);
});

santosRouter.get('/fila/:branch', async (request, response) => {
  const params = request.params.branch;

  const data = await getAllDataByBranch(params);

  response.json(data);
})

// Retorna o item da fila pelo ID
santosRouter.get('/fila/:id', async (request, response) => { 
  const params = request.params.id;

  const data = await getById(params);

  response.json(data);
});

// retorna todos os itens por jogo
santosRouter.get('/fila/names/:game', async (request, response) => { 
  const params = [ request.params.game,  'santos' ]; //provisorio esse santos digitado

  const data = await getNames(params[0], params[1]);

  return response.json(data)
});

santosRouter.get('/fila/next/:game', async (request, response) => { 
  const params = [ request.params.game, 'santos' ]; //provisorio esse santos digitado

  const data = await getNext(params[0], params[1]);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

santosRouter.get('/fila/size/:game', async (request, response) => { 
  const params = [ request.params.game, 'santos' ]; //provisorio esse santos digitado

  const data = await getSize(params[0], params[1]);

  return response.json({message: `Existem ${data.playersCount} usuários na fila`});
});

// Métodos delete
santosRouter.delete('/fila/:game', async (request, response) => {
  const params = [ request.params.game, 'santos' ]; //provisorio esse santos digitado

  const data = await deleteFirstElement(params[0], params[1]);

  response.json({message: `Usuário deletado da fila ${params[0]} de ${params[1]}`});
})

santosRouter.delete('/delete/:id',  (request, response) => {
  const params = request.params.id;

  const data = deleteUser(params).then(data => data);

  response.json(data);
})

santosRouter.delete('/reset', async (request, response) => {

  const reset = await resetTable();

  return response.send(reset);
});

module.exports = santosRouter;