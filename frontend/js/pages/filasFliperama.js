const tableFliperama = document.querySelector('.table-fliperama');

const url = 'http://localhost:3333/santos/fila/names/fliperama';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return response
  }
};

const addItemIntoFliperama = async () => {
  const items = await getPosts();

  const itemTemplate = items.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt="foto do jogador"></td>
      <td>${item.name}</td>
    </tr>
  `).join("");

  tableFliperama.innerHTML += itemTemplate;
};

addItemIntoFliperama();


var joinFliperama = document.querySelector(".join-fliperama");

var modalBg = document.querySelector(".modal-bg");
var modalFechar = document.querySelector(".fechar");

modalFechar.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

joinFliperama.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});