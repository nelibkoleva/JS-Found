function train(arr) {

    let wagons = arr.shift(0).split(' ').map(Number);
    const capacity = arr.shift();

    for (let commands of arr) {

        if (commands.includes('Add')) {

            const tokens = commands.split(' ');
            let passangers = Number(tokens.pop());

            wagons.push(passangers);

        } else {

            let commandsToNumber = Number(commands);

            for (let i = 0; i < wagons.length; i++) {

                if ((wagons[i] + commandsToNumber) <= capacity) {
                    wagons[i] += commandsToNumber;
                  
break;
                }
            }
        
        }

    }

    console.log(wagons.join(' '));



}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])
