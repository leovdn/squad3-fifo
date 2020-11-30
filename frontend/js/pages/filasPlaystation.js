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

/* Contabilizando tempo de fila total com tempos diferentes por jogo */

const tableTime = document.querySelector('.table-time');
const games = [ 'fifa', 'tlou', 'sfv', 'beatsaber' ];
const gamesTime = [ 15, 30, 5, 10 ];
const minInHour = 60;

const getTime = async () => {
  let filaTime = 0, filaHour = 0, filaMin = 0;
  
  // Contabilizando tempo total de fila
  for (let i = 0; i < games.length; i++) {

    let urlTime = `http://localhost:3333/santos/fila/size/${games[i]}`;

    const getData = async () => {
      try {
        const response = await fetch(urlTime);
        return response.json();
      } catch (error) {
        return response;
      }
    };

    let size = await getData();

    filaTime += size * gamesTime[i];
  }

  while (filaTime > minInHour) { 
    filaHour += 1;
    filaMin = filaTime - minInHour;
    filaTime -= minInHour;
  }

  const itemTemplate = `
    <tr>
      <td>${filaHour}:${filaMin} hr</td>
    </br>
  `;

  tableTime.innerHTML += itemTemplate;  
};

getTime();