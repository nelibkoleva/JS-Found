function array0Manipulations(data) {
  
let newData = data.shift().split(' ');

let newDataToNumber = newData.map(Number);
// let commands = data.split(', ');

for (let el = 0; el < data.length; el ++) {

    let commands = data[el];
    let tokens = commands.split(' ');
    let number = Number(tokens[1]);
    let index = Number(tokens[2]);

    if (tokens.includes('Add')) {

        newDataToNumber.push(number);
    } else if (tokens.includes('Remove')) {
       newDataToNumber = newDataToNumber.filter(el => el !== number);
 
    } else if (tokens.includes('RemoveAt')) {
        newDataToNumber.splice(number, 1);

    } else if (tokens.includes('Insert')) {
       
     newDataToNumber.splice(index, 0, number);

    }
}

console.log(newDataToNumber.join(' '));
}




array0Manipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
    