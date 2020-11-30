// const fetch = require('node-fetch');
const { default: Axios } = require('axios');

const api = Axios.create({
  baseURL: 'http://localhost:3333/santos'
})

async function getCategoryData(category) {   
  const URL = `/fila/category/${category}`;

  try {
    const response = await api.get(URL);
    return response.data;    
  } catch (error) {
    return error;
  }
}

async function getGameData(game) {
  try {
    const response = await api.get(`/fila/names/${game}`);
    return response.data;
  } catch (error) {
    return error
  }    
  
}

async function handleRemoveFirstCategoryElement(category) {
  const URL = `/fila/category/${category}`;
  try {
    await api.delete(URL);
  } catch (err) {
    console.log(`Sem itens na categoria ${category} para remover`);
  }  
}

async function handleRemoveFirstGameElement(game) {
  const URL = `/fila/${game}`;
  try {
    await api.delete(URL);
  } catch (err) {
    console.log(`Sem itens do jogo ${game} para remover. Erro ${err}`);
  }  
}

async function isThereItems(category) {
  const data = await getCategoryData(category);
  return data;
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