function dungeonestDark(arr) {
let health = 100;
let coins = 0;

let arrToString = arr[0];
let rooms = arrToString.split('|');

let roomCounter = 0;

for (let room of rooms) {
  
roomCounter++;

    let roomElement = room.split(' ') ;
    let action = roomElement[0];
    let value = Number(roomElement[1]);

if ( action === "potion") {
    let healingNumber = 0;
    
    if (health < 100) {
health += value;

        if (health >= 100) {

healingNumber = 100 - (health - value);
health = 100;
} else {
    healingNumber = value; 
}
    } else {
        health = 100;
        healingNumber = 0;
    }
console.log(`You healed for ${healingNumber} hp.`); 
console.log(`Current health: ${health} hp.`);
} else if (action === "chest") {
    coins += (value);
    console.log(`You found ${value} coins.`);
} else {
    health -= value;
    if ( health > 0 ) {
        console.log(`You slayed ${action}.`);
    } else {
       console.log(`You died! Killed by ${action}.`);
       console.log(`Best room: ${roomCounter}`);
       return;
    }
}
}
console.log(`You've made it!`);
 console.log(`Coins: ${coins}`);
 console.log(`Health: ${health}`);
}
dungeonestDark( 
    ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])
    // ["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"] )
    // ["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])