const AppDAO = require('../database/dao');
const Fila = require('../models/fila');

const dbpath = './src/database/fila.db';

const dao = new AppDAO(dbpath);
const fila = new Fila(dao);

async function insertUser(name, game, branch) {
  const response = await fila.insert(name, game, branch);

  return response;
}

async function getAllData() {
  const response = await fila.getAll();

  return response;
}

async function getAllDataByBranch(branch) {
  const response = await fila.getallByBranch(branch);

  return response;
}

async function getById(id) {
  const response = await fila.getById(id);

  return response;
}

async function getNames(game, branch) {
  const response = await fila.getNamesByGame(game, branch);

  /*const responseFiltered = response.filter(obj => {
    if (bj.goame === game) {
      return obj
    }
  });*/

  return response;
}

async function getNext(game) {
  const response = await fila.getNextByGame(game);

  return response;
}

async function getSize(game) {
  const response = await fila.getSizeByGame(game);

  return response;
}

async function deleteUser(id) {
  const response = await fila.delete(id);
  
  return response;
}

async function deleteFirstElement(game, branch) {
  const response = await fila.deleteByGame(game, branch);

  return response;
}

async function resetTable() {
  const response = await fila.resetTable();

  return response;
}

module.exports = {
  insertUser: insertUser,
  deleteUser: deleteUser,
  deleteFirstElement: deleteFirstElement,
  getAllData: getAllData,
  getAllDataByBranch: getAllDataByBranch,
  getById: getById,
  getNames: getNames,
  getNext: getNext,
  getSize: getSize,
  resetTable: resetTable
};