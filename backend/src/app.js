// Configuração do Node
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { getAllData, insertUser, deleteUser, getById, deleteFirstElement,
        getNext, getSize, getNames, resetTable } = require('./services/main.js');

const app = express();   

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

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




// === Métodos get ===
// Retorna todos os itens da fila
app.get('/fila', async (request, response) => {
  const data = await getAllData().then(data => data);

  response.json(data);
});

// Retorna o item da fila pelo ID
app.get('/fila/:id', async (request, response) => { 
  const params = [request.params.id];

  const data = await getById(params);

  response.json(data);
});

// retorna apenas primeiro nome da lista na promise
app.get('/fila/game/:game', async (request, response) => { 
  const params = [request.params.game];

  const data = await getNames(params);

  return response.json(data)
});

app.get('/fila/next/:game', async (request, response) => { 
  const params = [request.params.game];

  const data = await getNext(params);

  return response.json({message: `Usuário ${data.name} é o próximo da fila`});
});

app.get('/fila/size/:game', async (request, response) => { 
  const params = [request.params.game];

  const data = await getSize(params);

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

app.delete('/fila', async (request, response) => {

  const reset = await resetTable();

  return response.send(reset);
});

// Exportação do módulo para ser iniciado no arquivo do servidor
module.exports = app;