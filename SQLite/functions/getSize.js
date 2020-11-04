const AppDAO = require('../dao');
const Fila = require('../fila');

async function getSize() {
    const dao = new AppDAO('../fila.db');
    const fila = new Fila(dao);

    let game = 'FIFA';


    // Usar async e await para receber a promise
    let count = await fila.getSizeByGame(game);

    console.log("Jogadores na fila: ", count.playersCount);

}

getSize()