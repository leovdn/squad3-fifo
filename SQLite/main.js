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

function insertUser() {
    const dao = new AppDAO('./fila.db');
    const fila = new Fila(dao);

    let name = 'Bob';
    let game = 'FIFA';

    fila.insert(name, game);
}

//insertUser()

main()