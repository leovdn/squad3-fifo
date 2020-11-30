const {removePlaystationElement, removeBoardElement, removeGameElement} = require('./temporizador');

function initFunctions() {
  removePlaystationElement('playstation');
  removeBoardElement('board');
  removeGameElement('fliperama');
  removeGameElement('pingpong');
  removeGameElement('sinuca');
}

module.exports = initFunctions;