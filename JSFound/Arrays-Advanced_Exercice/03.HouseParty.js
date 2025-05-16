function houseParty(arr) {
  let guests = [];

  for (let i = 0; i < arr.length; i++) {
    let [name, action] = arr[i].split(' ');
        
    if (arr[i].includes('not')) {
        const nameIndex = guests.indexOf(name);
        if (nameIndex !== -1) {
            guests.splice(nameIndex, 1);
        } else {
        console.log(`${name} is not in the list!`);
        } 
    } else {
        if (guests.includes(name)) {
          console.log(`${name} is already in the list!`);
        } else {
          guests.push(name);
        }
      }

    }
  

  console.log(guests.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
    )



