const tableBoard = document.querySelector('.table-board');

const url = 'http://localhost:3333/santos/fila/category/board';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return response
  }
};

const addItemIntoBoardGames = async () => {
  const items = await getPosts();

  const itemTemplate = items.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt="foto do jogador"></td>
      <td>${item.name}</td>
      <td>${item.game}</td>
    </tr>
  `).join("");

  tableBoard.innerHTML += itemTemplate;
};

addItemIntoBoardGames();


var joinBoardGames = document.querySelector(".join-board");

var modalBg = document.querySelector(".modal-bg");
var modalFechar = document.querySelector(".fechar");

modalFechar.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

joinBoardGames.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});