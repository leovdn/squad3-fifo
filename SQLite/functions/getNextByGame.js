const AppDAO = require('../dao');
const Fila = require('../fila');

async function getNext() {
    const dao = new AppDAO('../fila.db')
    const fila = new Fila(dao)

    let game = 'FIFA'

    // Usar async e await para receber a promise
    let next = await fila.getNextByGame(game)

    console.log("Próximo jogador: ", next.name)
}

getNext()