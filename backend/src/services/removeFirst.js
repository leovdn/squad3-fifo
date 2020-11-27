const fetch = require('node-fetch');

async function getCategoryData(category) {
  const URL = `http://localhost:3333/santos/fila/category/${category}`;
    
  const resposta = await fetch(URL);
  const data = resposta.json()

  return data;
}

async function handleRemoveFirstCategoryElement(category) {
  const URL = `http://localhost:3333/santos/fila/category/${category}`;
  try {
    await fetch(URL, {
      method: 'DELETE',
    });
  } catch (err) {
    alert('Erro ao deletar caso, tente novamente');
  }  
}

async function isThereItems() {
  const data = await getCategoryData('playstation');
  if (data.length) {
    setInterval(() => {
      handleRemoveFirstCategoryElement('playstation');
    }, 10000);
  }
}

isThereItems();
