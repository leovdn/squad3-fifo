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

  return fila.insert(name, game);
}


async function getAllData() {
  const response = await fila.getAll();

  return response;
}

async function getById(id) {
  const response = await fila.getById(id);

  return response
}

async function deleteUser(id) {
  const response = await fila.delete(id);
  
  return response;
}

async function deleteFirstElement(game) {
  const response = await fila.deleteByGame(game);

  return response;
}


module.exports = {
  getAllData: getAllData,
  insertUser: insertUser,
  deleteUser: deleteUser,
  getById: getById,
  deleteFirstElement: deleteFirstElement,
};