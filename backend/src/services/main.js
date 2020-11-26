const AppDAO = require('../database/dao');
const Fila = require('../models/fila');

const dbpath = './src/database/fila.db';

const dao = new AppDAO(dbpath);
const fila = new Fila(dao);

async function insertUser(name, game, category, branch) {
  const response = await fila.insert(name, game, category, branch);

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

// Get by game

async function getNames(game, branch) {
  const response = await fila.getNamesByGame(game, branch);

  return response;
}

async function getNext(game, branch) {
  const response = await fila.getNextByGame(game, branch);

  return response;
}

async function getSize(game, branch) {
  const response = await fila.getSizeByGame(game, branch);

  return response;
}

// Get by category

async function getNamesByCategory(category, branch) {
  const response = await fila.getNamesByCategory(category, branch);

  return response;
}

async function getNextByCategory(category, branch) {
  const response = await fila.getNextByCategory(category, branch);

  return response;
}

async function getSizeByCategory(category, branch) {
  const response = await fila.getSizeByCategory(category, branch);

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

async function deleteByCategory(category, branch) {
  const response = await fila.deleteByCategory(category, branch);

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
  deleteByCategory: deleteByCategory,
  getAllData: getAllData,
  getAllDataByBranch: getAllDataByBranch,
  getById: getById,
  getNames: getNames,
  getNext: getNext,
  getSize: getSize,
  getNamesByCategory: getNamesByCategory,
  getNextByCategory: getNextByCategory,
  getSizeByCategory: getSizeByCategory,
  resetTable: resetTable
};