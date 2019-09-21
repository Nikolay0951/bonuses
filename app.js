console.log('worked');

const purchaseAmount = 1000;
const availableBonuses = 100;

 const maxBonuses = purchaseAmount * 0.5; 

const applieBonuses = maxBonuses <= availableBonuses ? maxBonuses : availableBonuses; // тернарный оператор

console.log(applieBonuses)
const total = purchaseAmount - applieBonuses;

console.log(total);