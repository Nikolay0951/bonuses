console.log('worked');

const purchaseAmount = 1000;
const availableBonuses = 100;

const maxBonuses = purchaseAmount * 0.5;
let applieBonuses;
if (maxBonuses <= availableBonuses) {
    applieBonuses = maxBonuses;
} else {
    applieBonuses =availableBonuses;
} 

console.log(applieBonuses)
const total = purchaseAmount - applieBonuses;

console.log(total);