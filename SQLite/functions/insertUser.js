const AppDAO = require('../dao');
const Fila = require('../fila');

function insertUser() {
    const dao = new AppDAO('../fila.db');
    const fila = new Fila(dao);

    let name = 'Diego';
    let game = 'FIFA';

    fila.insert(name, game);
}

insertUser()