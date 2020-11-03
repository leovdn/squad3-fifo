const AppDAO = require('./dao.js');
const Fila = require('./fila.js');

function main() {
    const dao = new AppDAO('./fila.db')
    const fila = new Fila(dao)


    fila.createTable()

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

    users.map((user) => {
        const { name, game } = user
        return fila.insert(name, game)
    })  
}

main()