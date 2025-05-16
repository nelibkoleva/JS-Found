function space (arr) {

let route = arr.shift();
let fuel = Number(arr.shift());
let ammunition = Number(arr.shift());

let commandsArr = route.split(`||`);

for ( let i = 0; i < commandsArr.length; i++) {
let commands = commandsArr[i];
let parameters = commands.split(` `);

let command = parameters[0];

let value = Number(parameters[1]);
switch(command) {
    case 'Travel':
        if (fuel >= value) {
            fuel -= value;
            console.log(`The spaceship travelled ${value} light-years.`);
        } else {
            console.log("Mission failed.");
            return;
        }
        break;

case 'Enemy':
        if (ammunition >= value) {
            ammunition -= value;
            console.log(`An enemy with ${value} armour is defeated.`);
        } else { 
        
        if (fuel >= value * 2) {
            fuel -= value * 2;
            console.log(`An enemy with ${value} armour is outmaneuvered.`);
        } else {
            console.log("Mission failed.");
            return;
        }
    }
        break;
    

    case 'Repair':
        fuel += value;
        ammunition += value * 2;
        console.log(`Ammunitions added: ${value * 2}.`);
        console.log(`Fuel added: ${value}.`);
        break;

    case 'Titan':
     console.log("You have reached Titan, all passengers are safe.");
        return;

    }

}
}
space
([ 'Travel 10||Enemy 30||Repair 15||Titan', 
    '50', 
    '80' ])
// ([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
//     '60', 
//     '100' ])
    
    