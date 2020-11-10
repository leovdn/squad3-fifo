const AppDAO = require('../database/dao');
const Fila = require('../models/fila');

const dbpath = './src/database/fila.db';

const dao = new AppDAO(dbpath);
const fila = new Fila(dao);

async function insertUser(name, game) {
  const response = await fila.insert(name, game);

  return response;
}

async function getAllData() {
  const response = await fila.getAll();

  return response;
}

async function getById(id) {
  const response = await fila.getById(id);

  return response;
}

async function getNames(game) {
  const response = await fila.getAll();

  const responseFiltered = response.filter(obj => {
    if (obj.game === game) {
      return obj
    }
  });
  return responseFiltered;
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

async function deleteFirstElement(game) {
  const response = await fila.deleteByGame(game);

  return response;
}

async function resetTable() {
  const response = await fila.resetTable();

  return response;
}

module.exports = {
  getAllData: getAllData,
  insertUser: insertUser,
  deleteUser: deleteUser,
  deleteFirstElement: deleteFirstElement,
  getById: getById,
  getNames: getNames,
  getNext: getNext,
  getSize: getSize,
  resetTable: resetTable
};