// const fetch = require('node-fetch');
const { default: Axios } = require('axios');

const api = Axios.create({
  baseURL: 'http://localhost:3333/santos'
})

async function getCategoryData(category) {    
  const response = await api.get(`/fila/category/${category}`);
  return response.data;
}

async function getGameData(game) {    
  const response = await api.get(`/fila/names/${game}`);
  return response.data;
}

async function handleRemoveFirstCategoryElement(category) {
  const URL = `/fila/category/${category}`;
  try {
    await api.delete(URL);
  } catch (err) {
    console.log('Erro ao deletar caso, tente novamente');
  }  
}

async function handleRemoveFirstGameElement(game) {
  const URL = `/fila/${game}`;
  try {
    await api.delete(URL);
  } catch (err) {
    console.log('Erro ao deletar caso, tente novamente');
  }  
}

async function isThereItems(category) {
  const data = await getCategoryData(category);
  return data.length;
}

async function isThereItemsInGame(game) {
  const data = await getGameData(game);
  return data.length;
}


module.exports = {
  handleRemoveFirstCategoryElement: handleRemoveFirstCategoryElement,
  handleRemoveFirstGameElement: handleRemoveFirstGameElement,
  getCategoryData: getCategoryData,
  isThereItems: isThereItems,
  isThereItemsInGame: isThereItemsInGame,
  getGameData: getGameData
}