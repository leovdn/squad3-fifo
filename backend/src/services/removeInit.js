const {removePlaystationElement, removeBoardElement, removeGameElement} = require('./temporizador');

function initFunctions() {
  removePlaystationElement('playstation');
  removeBoardElement();
  removeGameElement('fliperama');
  removeGameElement('pingpong');
  removeGameElement('sinuca');
}

module.exports = initFunctions;