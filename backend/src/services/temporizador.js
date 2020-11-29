const {handleRemoveFirstCategoryElement, handleRemoveFirstGameElement, getCategoryData, isThereItems, isThereItemsInGame, getGameData} = require('./removeFirst');


async function removePlaystationElement(categoryGames) {
  const categoryItems = await isThereItems(categoryGames);
  const length = categoryItems.length;
  const [{ game, category }] = categoryItems;

  function setTime(game, timer) {
    setTimeout(() => {
      handleRemoveFirstCategoryElement(categoryGames)
      console.log(`${game} removido após ${timer} milissegundos`);
    }, timer)
  }

  if(game === 'fifa') {
    setTime(game, 4000);
  } else if (game === 'tlou') {
    setTime(game, 8000)
  } else if (game === 'sfv') {
    setTime(game, 12000)
  } else if (game === 'beatsaber') {
    setTime(game, 16000)
  }
}  

async function removeBoardElement() {
  setTimeout(async () => {
    const categoryItems = await isThereItems('board');
    if(categoryItems > 5) {
      handleRemoveFirstCategoryElement('board')
    } else {
      console.log('Não remover do board. Menor que 5 itens');
    }
  }, 32000);
}  

async function removeGameElement(game) {
  async function gameItems() {
    const gameItems = await getGameData(game);
    if(gameItems.length > 1) {
      handleRemoveFirstGameElement(game)
    } else {
      console.log(`Não remover do ${game}.`);
    }
  }

  if(game === 'fliperama') {
    setTimeout(gameItems, 8000);
  } else if (game === 'sinuca') {
    setTimeout(gameItems, 12000);    
  } else if (game === 'pingpong') {
    setTimeout(gameItems, 16000);
  }
}  


module.exports = {
  removePlaystationElement: removePlaystationElement,
  removeBoardElement: removeBoardElement,
  removeGameElement: removeGameElement
}
