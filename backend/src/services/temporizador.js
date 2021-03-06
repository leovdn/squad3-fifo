const {handleRemoveFirstCategoryElement, handleRemoveFirstGameElement, getCategoryData, isThereItems, isThereItemsInGame, getGameData} = require('./removeFirst');


async function removePlaystationElement(categoryGames) {
  try {
    const categoryItems = await isThereItems(categoryGames);
    const [{ name, game, category }] = categoryItems;

    function setTime(game, timer) {
      setTimeout(() => {
        handleRemoveFirstCategoryElement(categoryGames)
        console.log(`${name} removido de ${game} removido após ${timer} milissegundos`);
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
  } catch (error) {
    console.log(`Sem itens para excluir em ${boardGames}`);    
  }  
}  

async function removeBoardElement(boardGames) {
  try {
    const categoryItems = await isThereItems(boardGames);
    const [{ name, game, category }] = categoryItems;

    function setTime(game, timer) {
      setTimeout(() => {
        handleRemoveFirstCategoryElement(boardGames)
        console.log(`${name} removido de ${game} removido após ${timer} milissegundos`);
      }, timer)
    }

    if(game === 'war') {
      setTime(game, 20000);
    } else if (game === 'rpg') {
      setTime(game, 40000)
    }
  } catch (error) {
    console.log(`Sem itens para excluir em ${boardGames}`)
  }  
} 

async function removeGameElement(game) {
  async function gameItems() {
    const gameItems = await getGameData(game);
    if(gameItems.length > 0) {
      handleRemoveFirstGameElement(game)
    } else {
      console.log(`Não remover de ${game}. Sem jogadores na fila`);
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
