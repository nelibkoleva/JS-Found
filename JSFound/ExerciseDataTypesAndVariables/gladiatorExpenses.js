function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let costs = 0;
let counterShieldBrokes = 0;

for (let curFight = 1; curFight <= lostFightsCount; curFight++) {


if (curFight % 2 === 0) {
    costs += helmetPrice;
}
if (curFight % 3 === 0) {
    costs += swordPrice;
}
if ( curFight % 2 === 0 && curFight % 3 === 0 ) {
    counterShieldBrokes ++;
    costs += shieldPrice;

    if ( counterShieldBrokes % 2 === 0) {
    costs += armorPrice;
    }
}

}
console.log(`Gladiator expenses: ${costs.toFixed(2)} aureus`);
}
gladiatorExpenses(7,
    2,
    3,
    4,
    5
    
    )