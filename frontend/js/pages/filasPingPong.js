const tablePingPong = document.querySelector('.table-pingpong');

const url = 'http://localhost:3333/santos/fila/names/pingpong';

const getPosts = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return response
  }
};

const addItemIntoPingPong = async () => {
  const items = await getPosts();

  const itemTemplate = items.map((item, index) => `
    <tr>
      <td>${index + 1}º</td>
      <td><img class="foto" src="img/logo.png" alt="foto do jogador"></td>
      <td>${item.name}</td>
    </tr>
  `).join("");

  tablePingPong.innerHTML += itemTemplate;
};

addItemIntoPingPong();


var joinPingPong = document.querySelector(".join-pingpong");

var modalBg = document.querySelector(".modal-bg");
var modalFechar = document.querySelector(".fechar");

modalFechar.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

joinPingPong.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});