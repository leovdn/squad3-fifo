const AppDAO = require('../dao');
const Fila = require('../fila');

function deleteUser() {
    const dao = new AppDAO('../fila.db')
    const fila = new Fila(dao)

    let game = 'FIFA'

    fila.deleteByGame(game)
}

deleteUser()