// const fetch = require('node-fetch');
const { default: Axios } = require('axios');

const api = Axios.create({
  baseURL: 'http://localhost:3333/santos'
})

async function getCategoryData(category) {    
  const response = await api.get(`/fila/category/${category}`);
  return response.data;
}

async function handleRemoveFirstCategoryElement(category) {
  const URL = `/fila/category/${category}`;
  try {
    await api.delete(URL);
  } catch (err) {
    alert('Erro ao deletar caso, tente novamente');
  }  
}


async function isThereItems(category) {
  const data = await getCategoryData('playstation');
  if (data.length < 10) {
    console.log('Não excluir. Menos de 10 itens')
  } else {
      handleRemoveFirstCategoryElement(category);
  }
}


module.exports = {
  handleRemoveFirstCategoryElement: handleRemoveFirstCategoryElement,
  getCategoryData: getCategoryData,
  isThereItems: isThereItems
}