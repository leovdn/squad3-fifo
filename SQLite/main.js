const AppDAO = require('./dao.js');
const Fila = require('./fila.js');

function main() {
    const tableName = 'fila.db'
    const dao = new AppDAO('./' + tableName)
    const fila = new Fila(dao)

    fila.create()

    let users = [
        {
            name: 'Diego',
            game: 'FIFA'
        },
        {
            name: 'Carlos',
            game: 'FIFA'
        }
    ]

    //inserindo dois jogadores inicialmente para teste
    users.map((user) => {
        const { name, game } = user
        return fila.insert(name, game)
    })  
}

main()