const {handleRemoveFirstCategoryElement, getCategoryData, isThereItems} = require('./removeFirst');

setInterval(() => {
  isThereItems('playstation')
}, 5000);