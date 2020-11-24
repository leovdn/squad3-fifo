

// !! AVISO: ARQUIVO COM PROPÓSITO DE TESTES !!
// O CÓDIGO ABAIXO NÃO REPRESENTA A VERSÃO FINAL

// As funções abaixo serão refatoradas e automatizadas :D


const container = document.querySelector('.table-fifa');

const url = 'http://localhost:3333/santos/fila/names/fifa';

const getPosts = async () => {
  const response = await fetch(url);  
  return response.json();  
};

const addPostsIntoFIFA = async () => {
  const posts = await getPosts();

  const postsTemplate = posts.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt=""></td>
      <td>${item.name}</td>
    </tr> 
  `).join("");

  container.innerHTML += postsTemplate;
};

addPostsIntoFIFA();

// ================================================================

const tableTlou = document.querySelector('.table-tlou');

const url2 = 'http://localhost:3333/santos/fila/names/tlou';

const getPosts2 = async () => {
  const response = await fetch(url2);  
  return response.json();  
};

const addPostsIntoTlou = async () => {
  const posts = await getPosts2();

  const postsTemplate = posts.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt=""></td>
      <td>${item.name}</td>
    </tr> 
  `).join("");

  tableTlou.innerHTML += postsTemplate;
};

addPostsIntoTlou();

//===============================================

const tableSFV = document.querySelector('.table-sfv');

const url3 = 'http://localhost:3333/santos/fila/names/sfv';

const getPosts3 = async () => {
  const response = await fetch(url3);  
  return response.json();  
};

const addPostsIntoStreetFighter = async () => {
  const posts = await getPosts3();

  const postsTemplate = posts.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt=""></td>
      <td>${item.name}</td>
    </tr> 
  `).join("");

  tableSFV.innerHTML += postsTemplate;
};

addPostsIntoStreetFighter();


//===============================================

const tableBoard = document.querySelector('.table-board');

const url4 = `http://localhost:3333/santos/fila/names/rpg`;

const getPosts4 = async () => {
  const response = await fetch(url4);  
  return response.json();  
};

const addPostsIntoBoard = async () => {
  const posts = await getPosts4();

  const postsTemplate = posts.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt=""></td>
      <td>${item.name}</td>
    </tr> 
  `).join("");

  tableBoard.innerHTML += postsTemplate;
};

addPostsIntoBoard();

// module.exports = {addPostsIntoFIFA: addPostsIntoFIFA};

