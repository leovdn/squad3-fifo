const AppDAO = require('../database/dao');
const Fila = require('../models/fila');

const dbpath = './src/database/fila.db';

const dao = new AppDAO(dbpath);
const fila = new Fila(dao);

// function main() {
//     const dao = new AppDAO(dbpath)
//     const fila = new Fila(dao)


//     fila.createTable()

//     let users = [
//         {
//             name: 'Diego',
//             game: 'FIFA'
//         },
//         {
//             name: 'Carlos',
//             game: 'FIFA'
//         }
//     ]

//     users.map((user) => {
//         const { name, game } = user
//         return fila.insert(name, game)
//     })

    
// }

function insertUser(user, game) {

    fila.insert(name, game);
}


async function getAllData() {

  const response = await fila.getAll();

  return response;
}

async function deleteUser(id) {
    const response = await fila.delete(id);
    
    return response;
}


module.exports = {
  getAllData: getAllData,
  insertUser: insertUser,
  deleteUser: deleteUser,
};