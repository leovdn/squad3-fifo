const AppDAO = require('../dao');
const Fila = require('../fila');

function createTable() {
    const tableName = 'fila.db'
    const dao = new AppDAO('../' + tableName)
    const fila = new Fila(dao)

    fila.create(tableName)
}

createTable()