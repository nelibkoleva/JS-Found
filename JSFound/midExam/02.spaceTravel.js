


    function spaceTravel(arr) {
        let commands = arr[0].split('||');
        let fuel = parseInt(arr[1]);
        let ammunition = parseInt(arr[2]);
    
        for (let command of commands) {
            let [action, value] = command.split(' ');
            value = parseInt(value);
    
            switch(action) {
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
                    } else if (fuel >= value * 2) {
                        fuel -= value * 2;
                        console.log(`An enemy with ${value} armour is outmaneuvered.`);
                    } else {
                        console.log("Mission failed.");
                        return;
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
spaceTravel([ 'Travel 10||Enemy 30||Repair 15||Titan', 
    '50', 
    '80' ])
    