const tablePlaystation = document.querySelector('.table-playstation');

const url = 'http://localhost:3333/santos/fila/category/playstation';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return response
  }
};

const addItemIntoPlaystation = async () => {
  const items = await getPosts();

  const itemTemplate = items.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt="foto do jogador"></td>
      <td>${item.name}</td>
      <td>${item.game}</td>
    </tr>
  `).join("");

  tablePlaystation.innerHTML += itemTemplate;
};

addItemIntoPlaystation();


var joinPlaystation = document.querySelector(".join-playstation");

var modalBg = document.querySelector(".modal-bg");
var modalFechar = document.querySelector(".fechar");

modalFechar.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

joinPlaystation.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});