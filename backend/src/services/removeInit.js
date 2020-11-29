const {removePlaystationElement, removeBoardElement, removeGameElement} = require('./temporizador');

function initFunctions() {
  // removePlaystationElement();
  removeBoardElement();
  removeGameElement('fliperama');
  removeGameElement('pingpong');
  removeGameElement('sinuca');
}

module.exports = initFunctions;