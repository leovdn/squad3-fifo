const express = require('express');
const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
  getNext, getSize, getNames, resetTable, getAllDataByBranch } = require('./services/main.js');

const saoPauloRouter = express.Router();
const thisBranch = 'SP' || 'sp';

saoPauloRouter.get('/', (request, response) => {
  return response.send('Unidade de São Paulo')
})

// Método insert
saoPauloRouter.post('/fila', (request, response) => {
  const { name, game, branch } = request.body;

  insertUser(name, game, branch);

  return response.json({message: `Usuário ${name} criado`});
});

// Retorna todos os items da unidade
saoPauloRouter.get('/fila', async (request, response) => {
  const data = await getAllDataByBranch(thisBranch);

  response.json(data);
})

// Retorna o item da fila pelo ID
saoPauloRouter.get('/fila/:id', async (request, response) => { 
  const params = request.params.id;

  const data = await getById(params);

  response.json(data);
});

// retorna todos os itens por jogo
saoPauloRouter.get('/fila/names/:game', async (request, response) => { 
  const params = request.params; 

  const data = await getNames(params.game, thisBranch);

  return response.json(data)
});

saoPauloRouter.get('/fila/next/:game', async (request, response) => { 
  const params = request.params 

  const data = await getNext(params.game, thisBranch);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

saoPauloRouter.get('/fila/size/:game', async (request, response) => { 
  const params = request.params; 

  const data = await getSize(params.game, thisBranch);

  return response.json({message: `Existem ${data.playersCount} usuários na fila`});
});

// Métodos delete
saoPauloRouter.delete('/fila/:game', async (request, response) => {
  const params = request.params; 

  const data = await deleteFirstElement(params.game, thisBranch);

  response.json({message: `Usuário deletado da fila ${params.game} de ${thisBranch}`});
})

saoPauloRouter.delete('/delete/:id',  (request, response) => {
  const params = request.params.id;

  const data = deleteUser(params).then(data => data);

  response.json(data);
})

saoPauloRouter.delete('/reset', async (request, response) => {

  const reset = await resetTable();

  return response.send(reset);
});

module.exports = saoPauloRouter;